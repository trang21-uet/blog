import { Link as MuiLink } from "@mui/material";
import NextLink from "next/link";
import { memo } from "react";
import Button, { ButtonProps } from "./Button";

export type LinkProps = {
  href: string;
  color?: ButtonProps["color"];
} & Omit<ButtonProps, "color">;

const Link = (props: LinkProps) => {
  const { href, color = "secondary", ...rest } = props;
  return (
    <Button
      component={MuiLink}
      LinkComponent={NextLink}
      href={href}
      color={color}
      {...rest}
    />
  );
};

export default memo(Link);
