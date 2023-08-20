import { configureStore } from "@reduxjs/toolkit";
import blogReducer, { BlogState } from "./blog/reducer";

export interface State {
  blog: BlogState;
}

export const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
