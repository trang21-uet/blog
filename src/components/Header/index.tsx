import { Paper } from "@mui/material";
import Nav from "./Nav";
import { memo } from "react";
import { useBreakpoints } from "@/hooks";
import { Logo } from "@/components";
import { HEADER_HEIGHT } from "@/constant";
import { LOGIN_PATH, REGISTER_PATH } from "@/constant/path";
import { useRouter } from "next/router";
import SearchBar from "./SearchBar";

const AUTH_PATHS = [LOGIN_PATH, REGISTER_PATH];

const Header = () => {
  const { isMd } = useBreakpoints();
  const { pathname } = useRouter();

  return AUTH_PATHS.includes(pathname) ? (
    <></>
  ) : (
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
      {/* <SearchBar /> */}
      <Nav collapse={isMd} active={pathname} />
    </Paper>
  );
};

export default memo(Header);
