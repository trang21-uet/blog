import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";
import { memo } from "react";

export type ButtonProps = {} & MuiButtonProps;

const Button = (props: ButtonProps) => {
  const { variant = "contained", ...rest } = props;
  return <MuiButton variant={variant} {...rest} />;
};

export default memo(Button);
