import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import { memo } from "react";

export type IconButtonProps = { icon: React.ReactNode } & MuiIconButtonProps;

const IconButton = (props: IconButtonProps) => {
  const { children, icon, ...rest } = props;
  return <MuiIconButton {...rest}>{icon}</MuiIconButton>;
};

export default memo(IconButton);
