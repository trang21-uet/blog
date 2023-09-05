import { useSnackbar } from "@/store/app";
import { Alert as MuiAlert, AlertColor } from "@mui/material";
import { memo, useEffect } from "react";

type Props = {
  message: string;
  severity?: AlertColor;
};

const Alert = (props: Props) => {
  const { onRemoveSnackbar } = useSnackbar();

  useEffect(() => {
    const timeout = setTimeout(() => {
      onRemoveSnackbar();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [onRemoveSnackbar]);

  const { message, severity = "success" } = props;
  return (
    <MuiAlert severity={severity} variant="filled">
      {message}
    </MuiAlert>
  );
};

export default memo(Alert);
