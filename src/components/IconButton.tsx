import {
  IconButton as MuiIconButton,
  IconButtonProps as MuiIconButtonProps,
} from "@mui/material";
import { memo } from "react";

export type IconButtonProps = {} & MuiIconButtonProps;

const IconButton = (props: IconButtonProps) => {
  const { ...rest } = props;
  return <MuiIconButton {...rest} />;
};

export default memo(IconButton);
