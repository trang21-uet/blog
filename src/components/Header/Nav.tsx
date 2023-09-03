import { memo } from "react";
import { Stack } from "@mui/material";
import IconButton from "../IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../Link";
import { NavItem } from "@/constant/type";
import { CONTACT_PATH, HOME_PATH, INTRODUCE_PATH } from "@/constant/path";
import AccountMenu from "./AccountMenu";

type NavProps = {
  collapse?: boolean;
  active: string;
};

const Nav = (props: NavProps) => {
  const { active, collapse = false } = props;
  return collapse ? (
    <IconButton color="secondary">
      <MenuIcon fontSize="large" />
    </IconButton>
  ) : (
    <Stack component="nav" direction="row" alignItems="center">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          variant="text"
          disabled={active === item.href}
          sx={{
            textTransform: "uppercase",
            fontWeight: "600",
            boxShadow: "none",
            bgColor: "transparent",
            color: "text.primary",
            ":hover": {
              color: "secondary.dark",
            },
            "&.Mui-disabled": {
              bgColor: "transparent",
              color: "secondary.dark",
            },
          }}
        >
          {item.label}
        </Link>
      ))}
      <AccountMenu />
    </Stack>
  );
};

export default memo(Nav);

const NAV_ITEMS: NavItem[] = [
  {
    label: "Trang chủ",
    href: HOME_PATH,
  },
  {
    label: "Giới thiệu",
    href: INTRODUCE_PATH,
  },
  {
    label: "Liên hệ",
    href: CONTACT_PATH,
  },
];
