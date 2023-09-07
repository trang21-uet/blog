import { Text } from "@/components";
import { useBlogs } from "@/store/blog";
import { Box, Stack } from "@mui/material";
import { useEffect } from "react";
import BlogCard from "./BlogCard";

const Page = () => {
  const { items, onGetBlogs } = useBlogs();

  useEffect(() => {
    if (items.length > 0) return;
    onGetBlogs();
  }, [items, onGetBlogs]);

  return (
    <Stack component="main" py={3}>
      <Text
        variant="h4"
        sx={{
          mb: 2,
        }}
      >
        Blog phổ biến
      </Text>
      <Box
        display={{ xs: "flex", sm: "grid" }}
        flexDirection="column"
        gridTemplateColumns={{
          sm: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gridTemplateRows="max-content"
        gap={3}
        p={1}
      >
        {items &&
          items.map((item) => (
            <BlogCard
              key={item.id}
              id={item.id}
              description={item.description}
              title={item.title}
            />
          ))}
      </Box>
    </Stack>
  );
};

export default Page;
