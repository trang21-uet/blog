import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { Snackbar, addSnackbar, removeSnackbar } from "./reducer";

export const useSnackbar = () => {
  const dispatch = useAppDispatch();

  const snackbarList = useAppSelector((state) => state.app.snackbarList);

  const onAddSnackbar = useCallback(
    (message: Snackbar["message"], severity?: Snackbar["severity"]) => {
      dispatch(addSnackbar({ message, severity }));
    },
    [dispatch],
  );

  const onRemoveSnackbar = useCallback(() => {
    dispatch(removeSnackbar());
  }, [dispatch]);

  return {
    snackbarList,
    onAddSnackbar,
    onRemoveSnackbar,
  };
};
