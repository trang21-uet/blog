"use client";

import { Stack } from "@mui/material";
import Nav from "./Nav";
import { memo } from "react";
import { useBreakpoints } from "@/hooks";
import { Logo } from "@/components";

const Header = () => {
  const { isMd } = useBreakpoints();
  return (
    <Stack direction="row" justifyContent="space-between" px={4}>
      <Logo />
      <Nav collapse={isMd} />
    </Stack>
  );
};

export default memo(Header);
