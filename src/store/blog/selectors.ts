import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { shallowEqual } from "react-redux";
import { useCallback, useMemo } from "react";
import { DataStatus } from "@/constant/enum";
import { getBlog } from "./actions";

export const useBlog = () => {
  const dispatch = useAppDispatch();
  const {
    blog: item,
    blogStatus: status,
    blogError: error,
  } = useAppSelector((state) => state.blog, shallowEqual);

  const isIdle = useMemo(() => status === DataStatus.IDLE, [status]);
  const isFetching = useMemo(() => status === DataStatus.LOADING, [status]);

  const onGetBlog = useCallback(async () => {
    return await dispatch(getBlog()).unwrap();
  }, [dispatch]);

  return {
    item,
    status,
    error,
    isIdle,
    isFetching,
    onGetBlog,
  };
};
