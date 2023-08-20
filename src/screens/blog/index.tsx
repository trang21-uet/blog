"use client";

import { Stack } from "@mui/material";
import Loading from "@/components/Loading";
import Text from "@/components/Text";
import { useBlog } from "@/store/blog";
import { useEffect } from "react";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { InfoBlock } from "@/components";
import { formatDate } from "@/utils";
import Image from "@/components/Image";

const Blog = () => {
  const { item, error, isFetching, onGetBlog } = useBlog();

  useEffect(() => {
    if (!item) {
      onGetBlog();
    }
  }, [item, onGetBlog]);

  return isFetching ? (
    <Loading />
  ) : (
    <Stack
      component="main"
      px={{
        xs: 4,
        sm: 8,
        md: 16,
        lg: 28,
        xl: 42,
      }}
      py={5}
      spacing={5}
    >
      <Text variant="h3">{item?.title}</Text>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <InfoBlock
          icon={<PersonIcon />}
          text={item?.author ?? "Unknown"}
          textProps={{ color: "text.disabled" }}
        />
        <InfoBlock
          icon={<AccessTimeIcon />}
          text={formatDate(item?.updatedAt)}
          textProps={{ color: "text.disabled" }}
        />
      </Stack>
      <Image height={500} src="https://picsum.photos/1280/720" alt="blog" />
      <Text textAlign="justify">{item?.content}</Text>
    </Stack>
  );
};

export default Blog;
