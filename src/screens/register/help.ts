import { RegisterInfo } from "@/store/auth";
import { validateLogin } from "../login/helper";

export const validateRegister = (info: RegisterInfo) => {
  const error = { ...validateLogin(info), confirm: "" };
  if (!error.password && info.password !== info.confirm) {
    error.password = "Hai mật khẩu không trùng khớp";
    error.confirm = "Hai mật khẩu không trùng khớp";
  }
  return error;
};
