import { Text } from "@/components";
import Link from "@/components/Link";
import { BLOG_PATH } from "@/constant/path";
import { Paper, Skeleton, Stack } from "@mui/material";
import { memo } from "react";

type BlogCardProps = {
  id: string;
  title: string;
  description: string;
};

const BlogCard = (props: BlogCardProps) => {
  const { id, title, description } = props;
  return (
    <Paper
      component={Link}
      color="primary"
      href={`${BLOG_PATH}/${id}`}
      elevation={5}
      sx={{
        minHeight: 300,
        flexDirection: "column",
        p: 0,
        borderRadius: 2,
        overflow: "hidden",
        transition: "all 0.3s",
        ":hover": {
          transform: "scale(1.03)",
          bgcolor: "primary.main",
        },
      }}
    >
      <Skeleton
        variant="rectangular"
        height={200}
        width="100%"
        animation="wave"
      />
      <Stack spacing={2} m={2} flex={1} height="50%">
        <Text
          numberOfLines={2}
          sx={{ fontSize: 18, fontWeight: "600", lineHeight: 1.2 }}
        >
          {title}
        </Text>
        <Text variant="body2" numberOfLines={5}>
          {description}
        </Text>
      </Stack>
    </Paper>
  );
};

export default memo(BlogCard);
