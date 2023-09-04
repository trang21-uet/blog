import NextLink from "next/link";
import { memo } from "react";
import Button, { ButtonProps } from "./Button";

export type LinkProps = {
  href: string;
} & ButtonProps;

const Link = (props: LinkProps) => {
  const { href, ...rest } = props;
  return (
    <Button LinkComponent={NextLink} href={href} color="secondary" {...rest} />
  );
};

export default memo(Link);
