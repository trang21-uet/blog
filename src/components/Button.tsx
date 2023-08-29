import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";
import { memo } from "react";

export type ButtonProps = {
  color?: MuiButtonProps["color"];
} & Omit<MuiButtonProps, "color">;

const Button = (props: ButtonProps) => {
  const { sx, variant = "contained", color = "primary", ...rest } = props;
  return (
    <MuiButton
      variant={variant}
      sx={{ transitionDuration: "0.25s", ...sx }}
      color={color}
      {...rest}
    />
  );
};

export default memo(Button);
