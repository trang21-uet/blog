import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

export type TextProps = {
  numberOfLines?: number;
  sx?: TypographyProps["sx"];
  noSelect?: boolean;
} & Omit<TypographyProps, "sx">;

const Text = (props: TextProps) => {
  const { numberOfLines, noSelect = false, children, sx, ...rest } = props;

  const styles: TypographyProps["sx"] = {
    ...(numberOfLines && {
      display: "-webkit-box",
      overflowY: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: numberOfLines,
    }),
    ...(noSelect && { userSelect: "none" }),
    ...sx,
  };

  return (
    <Typography sx={styles} {...rest}>
      {children}
    </Typography>
  );
};

export default memo(Text);
