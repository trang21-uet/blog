import apiClient, { Endpoint } from "@/api";
import { AN_ERROR_TRY_AGAIN } from "@/constant";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { HttpStatusCode } from "axios";
import { LoginInfo, RegisterInfo } from "./types";

export const login = createAsyncThunk("auth/login", async (info: LoginInfo) => {
  try {
    const response = await apiClient.post(Endpoint.LOGIN, info);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw AN_ERROR_TRY_AGAIN;
  } catch (error) {
    throw error;
  }
});

export const register = createAsyncThunk(
  "auth/register",
  async (info: RegisterInfo) => {
    try {
      const response = await apiClient.post(Endpoint.REGISTER, info);
      if (response.status === HttpStatusCode.Created) {
        return response.data;
      }
      throw AN_ERROR_TRY_AGAIN;
    } catch (error) {
      throw error;
    }
  },
);
