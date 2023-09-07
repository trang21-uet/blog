import { Button, Logo, Text } from "@/components";
import { Input } from "@/components/Form";
import Link from "@/components/Link";
import { HEADER_HEIGHT, WRONG_LOGIN_INFO } from "@/constant";
import {
  BLOG_PATH,
  HOME_PATH,
  LOGIN_PATH,
  REGISTER_PATH,
} from "@/constant/path";
import { LoginInfo, useAuth } from "@/store/auth";
import { Paper, Stack } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { validateLogin } from "./helper";
import { useRouter } from "next/router";
import { HttpStatusCode } from "axios";
import { useSnackbar } from "@/store/app";

interface UserLoginError {
  email: string;
  password: string;
}

const Login = () => {
  const [info, setInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<UserLoginError>({
    email: "",
    password: "",
  });
  const router = useRouter();
  const { onAddSnackbar } = useSnackbar();
  const { onLogin, user } = useAuth();

  useEffect(() => {
    if (user) {
      router.push(HOME_PATH);
    }
  }, [router, user]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError({
      email: "",
      password: "",
    });
    try {
      const newError = validateLogin(info);
      if (newError.email || newError.password) {
        setError(newError);
        return;
      }
      await onLogin(info);
      onAddSnackbar("Đăng nhập thành công");
      setTimeout(
        () =>
          router.push(
            router.query?.blogId
              ? `${BLOG_PATH}/${router.query?.blogId}`
              : LOGIN_PATH,
          ),
        1000,
      );
    } catch (error) {
      setError({
        email: (error as { message: string }).message,
        password: (error as { message: string }).message,
      });
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
          <Text variant="h6">Đăng nhập</Text>
          <Input
            name="email"
            label="Email"
            type="email"
            value={info.email}
            onChangeText={(value) => setInfo({ ...info, email: value })}
            error={error.email}
            autoComplete="text"
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
