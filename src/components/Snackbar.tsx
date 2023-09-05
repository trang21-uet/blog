import { useSnackbar } from "@/store/app";
import { Stack } from "@mui/material";
import Alert from "./Alert";

const Snackbar = () => {
  const { snackbarList } = useSnackbar();

  if (!snackbarList.length) return null;

  return (
    <Stack
      spacing={1}
      position="fixed"
      zIndex={99999}
      top={24}
      left="50%"
      sx={{ transform: "translateX(-50%)" }}
    >
      {snackbarList.map(({ message, severity }, index) => (
        <Alert
          message={message}
          key={index}
          severity={severity || "success"}
        ></Alert>
      ))}
    </Stack>
  );
};

export default Snackbar;
