import { Button, Logo, Text } from "@/components";
import { Input } from "@/components/Form";
import Link from "@/components/Link";
import { HEADER_HEIGHT } from "@/constant";
import { HOME_PATH, LOGIN_PATH } from "@/constant/path";
import { RegisterInfo, useAuth } from "@/store/auth";
import { Paper, Stack } from "@mui/material";
import { useState, FormEvent, useEffect } from "react";
import { validateRegister } from "./help";
import { useRouter } from "next/router";
import { useSnackbar } from "@/store/app";

interface UserError {
  email: string;
  password: string;
  confirm: string;
}

const Register = () => {
  const [info, setInfo] = useState<RegisterInfo>({
    email: "",
    password: "",
    confirm: "",
  });
  const [error, setError] = useState<UserError>({
    email: "",
    password: "",
    confirm: "",
  });
  const { onRegister, user } = useAuth();
  const router = useRouter();
  const { onAddSnackbar } = useSnackbar();

  useEffect(() => {
    if (user) {
      router.push(HOME_PATH);
    }
  }, [router, user]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const newError = validateRegister(info);
      if (newError.email || newError.password) {
        setError(newError);
        return;
      }
      await onRegister(info);
      onAddSnackbar("Đăng ký thành công");
      setTimeout(() => router.push(LOGIN_PATH), 2000);
    } catch (error) {
      throw error;
    }
  };

  return (
    <Stack
      flex={1}
      height={`calc(100vh - ${HEADER_HEIGHT}px)`}
      alignItems="center"
      position="relative"
    >
      <Logo />
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: "600px",
          borderRadius: 4,
          p: 5,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        elevation={5}
      >
        <Stack spacing={3}>
          <Text variant="h6">Tạo tài khoản mới</Text>
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
