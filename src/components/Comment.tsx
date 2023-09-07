import { Stack } from "@mui/material";
import Image from "next/image";
import { memo } from "react";
import Text from "./Text";

type CommentProps = {
  comment: string;
  user?: string;
};

const Comment = (props: CommentProps) => {
  return (
    <Stack direction="row" spacing={3}>
      <Image
        alt="avatar"
        width={50}
        height={50}
        style={{ objectFit: "cover", borderRadius: "50%" }}
        src="https://picsum.photos/300/300"
      />
      <Stack>
        <Text sx={{ fontWeight: "600", fontSize: 18 }}>{props.user}</Text>
        <Text sx={{ fontSize: 14 }}>{props.comment}</Text>
      </Stack>
    </Stack>
  );
};

export default memo(Comment);
