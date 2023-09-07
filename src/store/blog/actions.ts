import { createAsyncThunk } from "@reduxjs/toolkit";
import client, { Endpoint } from "@/api";
import { BaseQueries } from "@/constant/type";
import { HttpStatusCode } from "axios";
import { AN_ERROR_TRY_AGAIN } from "@/constant";

export interface BlogQueries {
  id: string;
}

export interface CommentQueries {
  comment: string;
  userId: number;
  postId: number;
}

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (queries?: BaseQueries) => {
    try {
      // TODO
      const response = await client.get(Endpoint.BLOGS, queries);
      if (response.status === HttpStatusCode.Ok) {
        return response.data;
      }
      throw AN_ERROR_TRY_AGAIN;
    } catch (error) {
      throw error;
    }
  },
);

export const getBlog = createAsyncThunk("blog/getBlog", async (id: string) => {
  try {
    const response = await client.get(`${Endpoint.BLOGS}/${id}`);
    if (response.status === HttpStatusCode.Ok) {
      return response.data;
    }
    throw AN_ERROR_TRY_AGAIN;
  } catch (error) {
    throw error;
  }
});

export const addComment = createAsyncThunk(
  "blog/addComment",
  async (queries: CommentQueries) => {
    try {
      const { postId, comment, userId } = queries;
      const response = await client.post(`${Endpoint.COMMENT}/${postId}`, {
        comment,
        userId,
      });
      if (response.status === HttpStatusCode.Created) {
        return response.data;
      }
      throw AN_ERROR_TRY_AGAIN;
    } catch (error) {
      throw error;
    }
  },
);
