import { Typography, TypographyProps } from "@mui/material";
import { memo } from "react";

export type TextProps = {
  numberOfLines?: number;
  sx?: TypographyProps["sx"];
} & Omit<TypographyProps, "sx">;

const Text = (props: TextProps) => {
  const { numberOfLines, children, sx, ...rest } = props;
  return (
    <Typography
      sx={
        numberOfLines
          ? {
              display: "-webkit-box",
              overflowY: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: numberOfLines,
              ...sx,
            }
          : sx
      }
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default memo(Text);