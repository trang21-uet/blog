import { Stack } from "@mui/material";
import NextImage, { ImageProps as NextImageProps } from "next/image";
import { memo } from "react";

type ImageProps = {
  width?: string | number;
  height?: string | number;
  imageProps?: NextImageProps;
} & Omit<NextImageProps, "width" | "height">;

const Image = (props: ImageProps) => {
  const { width = "100%", height = "100%", ...rest } = props;
  return (
    <Stack sx={{ width, height, position: "relative" }}>
      <NextImage layout="fill" objectFit="contain" {...rest} />
    </Stack>
  );
};

export default memo(Image);
