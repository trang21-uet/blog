"use client";

import { Button, Logo, Text } from "@/components";
import { Input } from "@/components/Form";
import Link from "@/components/Link";
import { HEADER_HEIGHT } from "@/constant";
import { REGISTER_PATH } from "@/constant/path";
import { Paper, Stack } from "@mui/material";
import { useState, FormEvent } from "react";

interface UserLoginInfo {
  email: string;
  password: string;
}

interface UserLoginError {
  email: string;
  password: string;
}

const Login = () => {
  const [info, setInfo] = useState<UserLoginInfo>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<UserLoginError>({
    email: "",
    password: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(info);
  };

  return (
    <Stack
      flex={1}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      alignItems="center"
      justifyContent="center"
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "600px",
          borderRadius: 4,
          p: 5,
        }}
        elevation={5}
      >
        <Stack spacing={3}>
          {/* <Text variant="h6" sx={{ textAlign: "center", mb: 2 }}>
            Đăng nhập
          </Text> */}
          <Logo disabled />
          <Input
            name="email"
            label="Email"
            type="email"
            value={info.email}
            onChangeText={(value) => setInfo({ ...info, email: value })}
            error={error.email}
          />
          <Input
            name="password"
            label="Mật khẩu"
            value={info.password}
            onChangeText={(value) => setInfo({ ...info, password: value })}
            error={error.password}
            type="password"
          />
          <Button
            type="submit"
            color="primary"
            sx={{
              py: 1.5,
              textTransform: "uppercase",
              fontSize: 18,
              fontWeight: "700",
            }}
          >
            Đăng nhập
          </Button>
          <Text sx={{ textAlign: "center" }}>
            Chưa có tài khoản?{" "}
            <Link
              href={REGISTER_PATH}
              variant="text"
              sx={{
                color: "text.primary",
                p: 0,
                lineHeight: "1.4",
                mb: 0.4,
                ":hover": {
                  textDecoration: "underline",
                },
              }}
            >
              Đăng ký ngay
            </Link>
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Login;
