"use client";

import PersonIcon from "@mui/icons-material/Person";
import IconButton from "../IconButton";
import { Menu, MenuItem } from "@mui/material";
import { useState, memo } from "react";
import Link from "../Link";
import { LOGIN_PATH } from "@/constant/path";

const AccountMenu = () => {
  const [anchor, setAnchor] = useState<HTMLElement | null>(null);
  const open = Boolean(anchor);

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
        <MenuItem onClick={handleClose}>
          <Link href={LOGIN_PATH} variant="text" sx={{ p: 0 }}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  );
};

export default memo(AccountMenu);
