import { memo } from "react";
import { Stack } from "@mui/material";
import IconButton from "../IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "../Link";
import { NavItem } from "@/constant/type";
import { CONTACT_PATH, HOME_PATH, INTRODUCE_PATH } from "@/constant/path";

type NavProps = {
  collapse?: boolean;
};

const Nav = (props: NavProps) => {
  const { collapse = false } = props;
  return collapse ? (
    <IconButton color="secondary" icon={<MenuIcon fontSize="large" />} />
  ) : (
    <Stack direction="row">
      {NAV_ITEMS.map((item) =>
        item.children ? (
          <Link
            key={item.label}
            href={item.href}
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              boxShadow: "none",
            }}
          >
            {item.label}
          </Link>
        ) : (
          <Link
            key={item.label}
            href={item.href}
            sx={{
              textTransform: "uppercase",
              fontWeight: "600",
              boxShadow: "none",
            }}
          >
            {item.label}
          </Link>
        ),
      )}
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
