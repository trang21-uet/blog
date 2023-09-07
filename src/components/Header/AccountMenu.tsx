import { LOGIN_PATH } from "@/constant/path";
import { useAuth } from "@/store/auth";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuItem } from "@mui/material";
import { memo, useState } from "react";
import IconButton from "../IconButton";
import Link, { LinkProps } from "../Link";
import { Text } from "..";
import { useSnackbar } from "@/store/app";
import { useRouter } from "next/router";

type MenuButtonProps = {
  onClick: () => void;
  href?: string;
} & Omit<LinkProps, "href">;

const MenuButton = (props: MenuButtonProps) => {
  const { onClick, href, children, ...rest } = props;
  return (
    <MenuItem onClick={onClick}>
      {!href ? (
        <Text>{children}</Text>
      ) : (
        <Link
          variant="text"
          href={href}
          sx={{
            p: 0,
            color: "text.primary",
            bgcolor: "transparent",
            justifyContent: "start",
          }}
          disableRipple
          {...rest}
        >
          {children}
        </Link>
      )}
    </MenuItem>
  );
};

const AccountMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const { user, onLogout } = useAuth();
  const { onAddSnackbar } = useSnackbar();
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

  const handleLogout = () => {
    onLogout();
    onAddSnackbar("Đăng xuất thành công");
    router.push(LOGIN_PATH);
  };

  const getMenu = (
    isAuth: boolean,
  ): { label: string; onClick?: () => void; href?: string }[] =>
    isAuth
      ? [{ label: "Đăng xuất", onClick: handleLogout }]
      : [{ label: "Đăng nhập", href: LOGIN_PATH }];

  return (
    <>
      <IconButton onClick={handleClick}>
        <PersonIcon sx={{ color: "text.primary" }} />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchor}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {getMenu(!!user).map((item, index) => (
          <MenuButton
            key={index}
            href={item.href}
            onClick={item.onClick || handleClose}
          >
            {item.label}
          </MenuButton>
        ))}
      </Menu>
    </>
  );
};

export default memo(AccountMenu);
