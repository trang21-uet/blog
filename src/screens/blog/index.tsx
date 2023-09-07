import { Button, InfoBlock } from "@/components";
import Comment from "@/components/Comment";
import { Input } from "@/components/Form";
import Image from "@/components/Image";
import Link from "@/components/Link";
import Loading from "@/components/Loading";
import Text from "@/components/Text";
import { LOGIN_PATH } from "@/constant/path";
import { useBreakpoints } from "@/hooks";
import { useAuth } from "@/store/auth";
import { useBlog } from "@/store/blog";
import { formatDate } from "@/utils";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import { Divider, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useMemo, useState, useRef } from "react";
import TableOfContents from "./TableOfContents";

const Blog = () => {
  const { item, isFetching, onGetBlog, onComment } = useBlog();
  const [comment, setComment] = useState("");
  const { query } = useRouter();
  const { isMd, isXl } = useBreakpoints();
  const { user } = useAuth();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const imageHeight = useMemo(() => {
    switch (true) {
      case isMd:
        return 300;
      case isXl:
        return 500;
      default:
        return 600;
    }
  }, [isMd, isXl]);

  useEffect(() => {
    if (!query) return;

    onGetBlog(query?.id as string);
  }, [onGetBlog, query]);

  const addComment = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onComment({
      comment,
      postId: query?.id as unknown as number,
      userId: user?.id as number,
    });
    setComment("");
    inputRef.current && (inputRef.current.value = "");
  };

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
      <TableOfContents items={item?.contents.map((para) => para.title)} />
      <Image
        height={imageHeight}
        src="https://picsum.photos/1280/720"
        alt="blog"
      />
      {item?.contents.map((item, index) => <Paragraph key={index} {...item} />)}
      <Divider sx={{ width: "100%", height: "2px", bgcolor: "white" }} />
      <Text variant="h5">Bình luận</Text>
      {user ? (
        <Stack
          component="form"
          onSubmit={addComment}
          direction="row"
          spacing={3}
          alignItems="center"
        >
          <Input
            value={comment}
            ref={inputRef}
            onChangeText={(text) => setComment(text)}
            label="Nhập bình luận"
            name="comment"
            fullWidth
          />
          <Button type="submit" sx={{ whiteSpace: "nowrap", py: 1.5, px: 3 }}>
            Bình luận
          </Button>
        </Stack>
      ) : (
        <Text sx={{ textAlign: "center" }}>
          <Text
            onClick={() => {
              router.push({
                pathname: LOGIN_PATH,
                query: { blogId: router.query?.id as string },
              });
            }}
            sx={{
              cursor: "pointer",
              display: "inline-block",
              ":hover": {
                color: "primary.main",
              },
            }}
          >
            Đăng nhập
          </Text>{" "}
          để bình luận
        </Text>
      )}
      {item.comments &&
        item.comments.map((item, index) => (
          <Comment key={index} user={item.username} comment={item.comment} />
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
