import { LOGIN_PATH } from "@/constant/path";
import { useAuth } from "@/store/auth";
import PersonIcon from "@mui/icons-material/Person";
import { Menu, MenuItem } from "@mui/material";
import { memo, useState } from "react";
import IconButton from "../IconButton";
import Link, { LinkProps } from "../Link";

type MenuButtonProps = {
  onClick: () => void;
} & LinkProps;

const MenuButton = (props: MenuButtonProps) => {
  const { onClick, ...rest } = props;
  return (
    <MenuItem>
      <Link
        variant="text"
        sx={{
          p: 0,
          color: "text.primary",
          bgcolor: "transparent",
          justifyContent: "start",
        }}
        disableRipple
        {...rest}
      />
    </MenuItem>
  );
};

const AccountMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);
  const { user } = useAuth();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };

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
          <MenuButton key={index} href={item.href} onClick={handleClose}>
            {item.label}
          </MenuButton>
        ))}
      </Menu>
    </>
  );
};

const getMenu = (isAuth: boolean) =>
  isAuth
    ? [
        { label: "Thông tin tài khoản", href: LOGIN_PATH },
        { label: "Đăng xuất", href: LOGIN_PATH },
      ]
    : [{ label: "Đăng nhập", href: LOGIN_PATH }];

export default memo(AccountMenu);
