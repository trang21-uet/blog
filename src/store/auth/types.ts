import { DataStatus } from "@/constant/enum";

export interface LoginInfo {
  email: string;
  password: string;
}

export interface RegisterInfo {
  email: string;
  password: string;
  confirm: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface UserResponse {
  accessToken: string;
  user: User;
}
