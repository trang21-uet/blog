"use client";

import { Button, Logo, Text } from "@/components";
import { Input } from "@/components/Form";
import Link from "@/components/Link";
import { HEADER_HEIGHT } from "@/constant";
import { LOGIN_PATH } from "@/constant/path";
import { Paper, Stack } from "@mui/material";
import { useState, FormEvent } from "react";

interface UserInfo {
  email: string;
  password: string;
  confirm: string;
}

interface UserError {
  email: string;
  password: string;
  confirm: string;
}

const Register = () => {
  const [info, setInfo] = useState<UserInfo>({
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState<UserError>({
    email: "",
    password: "",
    confirm: "",
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
          <Input
            name="confirm"
            label="Xác nhận mật khẩu"
            value={info.confirm}
            onChangeText={(value) => setInfo({ ...info, confirm: value })}
            error={error.confirm}
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
            Đăng ký
          </Button>
          <Text sx={{ textAlign: "center" }}>
            Đã có tài khoản?{" "}
            <Link
              href={LOGIN_PATH}
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
              Đăng nhập
            </Link>
          </Text>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default Register;
