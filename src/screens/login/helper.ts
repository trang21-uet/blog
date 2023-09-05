import { EMAIL_REGEX, PASSWORD_REGEX } from "@/constant/regex";
import { LoginInfo } from "@/store/auth";

export const validateLogin = (info: LoginInfo) => {
  const error = { email: "", password: "", confirm: "" };
  if (!info.email) error.email = "Vui lòng nhập email";
  else if (!EMAIL_REGEX.test(info.email))
    error.email = "Email chưa đúng định dạng";

  if (!info.password) error.password = "Vui lòng nhập mật khẩu";
  else if (!PASSWORD_REGEX.test(info.password))
    error.password = "Mật khẩu chưa đúng định dạng";

  return error;
};
