import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

export type TextProps = {} & TypographyProps;

const Text = (props: TypographyProps) => {
  const { children, ...rest } = props;
  return <Typography {...rest}>{children}</Typography>;
};

export default memo(Text);
