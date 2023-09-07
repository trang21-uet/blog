import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shallowEqual } from "react-redux";
import { useCallback, useMemo } from "react";
import { DataStatus } from "@/constant/enum";
import { addComment, getBlog, getBlogs } from "./actions";
import { BaseQueries } from "@/constant/type";

export const useBlogs = () => {
  const dispatch = useAppDispatch();
  const {
    blogs: items,
    blogsStatus: status,
    blogsError: error,
  } = useAppSelector((state) => state.blog, shallowEqual);

  const isIdle = useMemo(() => status === DataStatus.IDLE, [status]);
  const isFetching = useMemo(() => status === DataStatus.LOADING, [status]);

  const onGetBlogs = useCallback(
    async (queries?: BaseQueries) => {
      return await dispatch(getBlogs(queries || {})).unwrap();
    },
    [dispatch],
  );

  return {
    items,
    status,
    error,
    isIdle,
    isFetching,
    onGetBlogs,
  };
};

export const useBlog = () => {
  const dispatch = useAppDispatch();
  const {
    blog: item,
    blogStatus: status,
    blogError: error,
  } = useAppSelector((state) => state.blog, shallowEqual);

  const isIdle = useMemo(() => status === DataStatus.IDLE, [status]);
  const isFetching = useMemo(() => status === DataStatus.LOADING, [status]);

  const onGetBlog = useCallback(
    async (id: string) => {
      return await dispatch(getBlog(id)).unwrap();
    },
    [dispatch],
  );

  const onComment = useCallback(
    async (data: { comment: string; userId: number; postId: number }) => {
      return await dispatch(addComment(data)).unwrap();
    },
    [dispatch],
  );

  return {
    item,
    status,
    error,
    isIdle,
    isFetching,
    onGetBlog,
    onComment,
  };
};
