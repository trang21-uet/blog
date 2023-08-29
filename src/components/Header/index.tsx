"use client";

import { Paper } from "@mui/material";
import Nav from "./Nav";
import { memo } from "react";
import { useBreakpoints } from "@/hooks";
import { Logo } from "@/components";
import { usePathname } from "next/navigation";
import { HEADER_HEIGHT } from "@/constant";

const Header = () => {
  const { isMd } = useBreakpoints();
  const pathname = usePathname();

  return (
    <Paper
      component="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        maxWidth: "100vw",
        px: 4,
        height: `${HEADER_HEIGHT}px`,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        bgcolor: "background.default",
      }}
    >
      <Logo />
      <Nav collapse={isMd} active={pathname} />
    </Paper>
  );
};

export default memo(Header);