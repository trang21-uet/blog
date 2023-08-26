"use client";

import { InfoBlock } from "@/components";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Loading from "@/components/Loading";
import Text from "@/components/Text";
import { useBlog } from "@/store/blog";
import { formatDate } from "@/utils";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import Outline from "./Outline";

const Blog = () => {
  const { item, error, isFetching, onGetBlog } = useBlog();
  const params = useParams();

  useEffect(() => {
    if (!params || item) {
      return;
    }
    onGetBlog({ id: params?.id as string });
  }, [item, onGetBlog, params]);

  return isFetching ? (
    <Loading />
  ) : (
    <Box
      component="main"
      display="grid"
      gap={5}
      gridTemplateColumns="1fr 3fr 1fr"
      overflow="hidden"
      position="relative"
      // px={{
      //   xs: 4,
      //   sm: 8,
      //   md: 16,
      //   lg: 28,
      //   xl: 42,
      // }}
      py={5}
    >
      <Stack overflow="auto"></Stack>
      <Stack spacing={5} overflow="auto">
        <Text variant="h3" position="sticky" top={0}>
          {item?.title}
        </Text>
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
        {item?.paragraphs.map((item, index) => (
          <Paragraph key={index} {...item} />
        ))}
      </Stack>
      <Outline
        outlines={item?.paragraphs.map((item) => item.title) || []}
        active={true}
      />
    </Box>
  );
};

type ParagraphProps = {
  title: string;
  content: string;
};

const Paragraph = (props: ParagraphProps) => {
  const { title, content } = props;
  return (
    <Stack id={title} alignItems="start">
      <Link
        href={`#${title}`}
        variant="text"
        sx={{
          color: "text.primary",
          px: 0,
          ":hover": {
            textDecoration: "underline",
          },
        }}
        fullWidth={false}
      >
        <Stack
          direction="row"
          justifyContent="start"
          alignItems="end"
          sx={{ fontSize: 20, fontWeight: "600" }}
        >
          # {title}
        </Stack>
      </Link>
      <Text>{content}</Text>
    </Stack>
  );
};

export default Blog;