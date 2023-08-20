import { memo } from "react";
import Text from "./Text";
import Link from "./Link";
import { HOME_PATH } from "@/constant/path";

const Logo = () => {
  return (
    <Link
      href={HOME_PATH}
      sx={{
        boxShadow: "none",
        ":hover": { bgcolor: "secondary.main", boxShadow: "none" },
      }}
    >
      <Text variant="h4">Dev Blogs</Text>
    </Link>
  );
};

export default memo(Logo);
