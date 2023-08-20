import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";
import { memo } from "react";

export type ButtonProps = {} & MuiButtonProps;

const Button = (props: ButtonProps) => {
  const { sx, variant = "contained", ...rest } = props;
  return (
    <MuiButton
      variant={variant}
      sx={{ transitionDuration: "0.5s", ...sx }}
      {...rest}
    />
  );
};

export default memo(Button);
