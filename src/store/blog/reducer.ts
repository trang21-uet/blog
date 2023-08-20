import { DataStatus } from "@/constant/enum";
import { Entity } from "@/constant/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBlog } from "./actions";
import { AN_ERROR_TRY_AGAIN } from "@/constant/index";

export interface Blog extends Entity {
  title: string;
  content: string;
  author: string;
}

export interface BlogState {
  blog?: Blog;
  blogStatus: DataStatus;
  blogError?: string;
}

const initialState: BlogState = {
  blogStatus: DataStatus.IDLE,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlog.pending, (state) => {
        state.blogStatus = DataStatus.LOADING;
      })
      .addCase(getBlog.fulfilled, (state, action: PayloadAction<Blog>) => {
        state.blog = action.payload;
        state.blogStatus = DataStatus.SUCCESS;
        state.blogError = undefined;
      })
      .addCase(getBlog.rejected, (state, action) => {
        state.blogStatus = DataStatus.FAILED;
        state.blogError = action.error?.message ?? AN_ERROR_TRY_AGAIN;
      });
  },
});

export default blogSlice.reducer;
