import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shallowEqual } from "react-redux";
import { useCallback, useMemo } from "react";
import { DataStatus } from "@/constant/enum";
import { BlogQueries, getBlog, getBlogs } from "./actions";

export const useBlogs = () => {
  const dispatch = useAppDispatch();
  const {
    blogs: items,
    blogsStatus: status,
    blogsError: error,
  } = useAppSelector((state) => state.blog, shallowEqual);

  const isIdle = useMemo(() => status === DataStatus.IDLE, [status]);
  const isFetching = useMemo(() => status === DataStatus.LOADING, [status]);

  const onGetBlogs = useCallback(async () => {
    return await dispatch(getBlogs()).unwrap();
  }, [dispatch]);

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
    async (queries: BlogQueries) => {
      return await dispatch(getBlog(queries)).unwrap();
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
  };
};