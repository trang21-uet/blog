import { useAppDispatch, useAppSelector } from "../hooks";
import { useCallback } from "react";
import { LoginInfo, RegisterInfo } from "./types";
import { login, register } from "./actions";
import { logout } from ".";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const {
    user,
    userStatus: status,
    userError: error,
    token,
  } = useAppSelector((state) => state.auth);

  const onLogin = useCallback(
    async (info: LoginInfo) => {
      return await dispatch(login(info)).unwrap();
    },
    [dispatch],
  );

  const onRegister = useCallback(
    async (info: RegisterInfo) => {
      return await dispatch(register(info)).unwrap();
    },
    [dispatch],
  );

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return {
    user,
    token,
    status,
    error,
    onLogin,
    onRegister,
    onLogout,
  };
};
