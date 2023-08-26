import { DataStatus } from "@/constant/enum";
import { Entity } from "@/constant/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBlog, getBlogs } from "./actions";
import { AN_ERROR_TRY_AGAIN } from "@/constant/index";

export interface Blog extends Entity {
  title: string;
  description: string;
  paragraphs: {
    title: string;
    content: string;
  }[];
  author: string;
}

export interface BlogState {
  blogs: Blog[];
  blogsStatus: DataStatus;
  blogsError?: string;
  blog?: Blog;
  blogStatus: DataStatus;
  blogError?: string;
}

const initialState: BlogState = {
  blogStatus: DataStatus.IDLE,
  blogs: [],
  blogsStatus: DataStatus.IDLE,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogs.pending, (state) => {
        state.blogsStatus = DataStatus.LOADING;
      })
      .addCase(getBlogs.fulfilled, (state, action: PayloadAction<Blog[]>) => {
        state.blogs = action.payload;
        state.blogsStatus = DataStatus.SUCCESS;
        state.blogsError = undefined;
      })
      .addCase(getBlogs.rejected, (state, action) => {
        state.blogsStatus = DataStatus.FAILED;
        state.blogsError = action.error?.message ?? AN_ERROR_TRY_AGAIN;
      })
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