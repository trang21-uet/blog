import { createAsyncThunk } from "@reduxjs/toolkit";
import BLOGS from "./data";
import client, { Endpoint } from "@/api";
import { BaseQueries } from "@/constant/type";
import { HttpStatusCode } from "axios";

export interface BlogQueries {
  id: string;
}

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (queries?: BaseQueries) => {
    try {
      // TODO
      // const response = await client.get(Endpoint.BLOG, queries);
      // if (response.status === HttpStatusCode.Ok) {
      //   return response.data;
      // }
      return BLOGS.filter((item) => item.title.includes(queries?.search || ""));
    } catch (error) {
      throw error;
    }
  },
);

export const getBlog = createAsyncThunk(
  "blog/getBlog",
  async (queries: BlogQueries) => {
    try {
      // TODO
      return BLOGS.find((item) => item.id === queries.id) || BLOGS[0];
    } catch (error) {
      throw error;
    }
  },
);
