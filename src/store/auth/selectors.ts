import { useAppDispatch, useAppSelector } from "../hooks";
import { useCallback } from "react";
import { LoginInfo, RegisterInfo } from "./types";
import { login, register } from ".";

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
      await dispatch(login(info));
    },
    [dispatch],
  );

  const onRegister = useCallback(
    async (info: RegisterInfo) => {
      await dispatch(register(info));
    },
    [dispatch],
  );

  return {
    user,
    token,
    status,
    error,
    onLogin,
    onRegister,
  };
};
