import { createAsyncThunk } from "@reduxjs/toolkit";
import BLOGS from "./data";

export interface BlogQueries {
  id: string;
}

export const getBlogs = createAsyncThunk("blog/getBlogs", async (queries) => {
  try {
    // TODO
    return BLOGS;
    return BLOGS;
  } catch (error) {
    throw error;
  }
});

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