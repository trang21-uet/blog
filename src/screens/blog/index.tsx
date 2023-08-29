"use client";

import { InfoBlock } from "@/components";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Loading from "@/components/Loading";
import Text from "@/components/Text";
import { useBreakpoints } from "@/hooks";
import { useBlog } from "@/store/blog";
import { formatDate } from "@/utils";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { Stack } from "@mui/material";
import { useParams } from "next/navigation";
import { useEffect, useMemo } from "react";
import TableOfContents from "./TableOfContents";

const Blog = () => {
  const { item, isFetching, onGetBlog } = useBlog();
  const params = useParams();
  const { isSm, isMd, isXl } = useBreakpoints();

  console.log({ isXl });

  const imageHeight = useMemo(() => {
    switch (true) {
      case isMd:
        return 300;
      case isXl:
        return 500;
      default:
        return 600;
    }
  }, [isXl]);

  useEffect(() => {
    if (!params || item) {
      return;
    }
    onGetBlog({ id: params?.id as string });
  }, [item, onGetBlog, params]);

  return isFetching ? (
    <Loading />
  ) : !item ? (
    <></>
  ) : (
    <Stack p={5} spacing={5}>
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
      <TableOfContents items={item?.paragraphs.map((para) => para.title)} />
      <Image
        height={imageHeight}
        src="https://picsum.photos/1280/720"
        alt="blog"
      />
      {item?.paragraphs.map((item, index) => (
        <Paragraph key={index} {...item} />
      ))}
    </Stack>
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
          fontSize: 20,
          fontWeight: "700",
          px: 0,
          ":hover": {
            textDecoration: "underline",
          },
        }}
        fullWidth={false}
      >
        {title}
      </Link>
      <Text>{content}</Text>
    </Stack>
  );
};

export default Blog;