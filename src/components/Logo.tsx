import { memo } from "react";
import Text from "./Text";
import Link from "./Link";
import { HOME_PATH } from "@/constant/path";
import { useRouter } from "next/router";

type Props = {
  disabled?: boolean;
};

const Logo = (props: Props) => {
  const { disabled = false } = props;
  const { pathname } = useRouter();

  return pathname === HOME_PATH || disabled ? (
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
