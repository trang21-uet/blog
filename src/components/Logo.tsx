"use client";

import { memo } from "react";
import Text from "./Text";
import Link from "./Link";
import { HOME_PATH } from "@/constant/path";
import { usePathname } from "next/navigation";

const Logo = () => {
  const pathname = usePathname();

  return pathname === HOME_PATH ? (
    <Text noSelect variant="h4" sx={{ cursor: "initial" }}>
      Dev Blogs
    </Text>
  ) : (
    <Link
      href={HOME_PATH}
      sx={{
        boxShadow: "none",
        bgcolor: "transparent",
        ":hover": {
          bgcolor: "transparent",
          boxShadow: "none",
          color: "secondary.dark",
        },
      }}
    >
      <Text variant="h4">Dev Blogs</Text>
    </Link>
  );
};

export default memo(Logo);
