"use client";
import { useBlogs } from "@/store/blog";
import { Box, Container, Stack, useTheme } from "@mui/material";
import BlogCard from "./BlogCard";
import { useEffect } from "react";
import { Text } from "@/components";

const Page = () => {
  const { items, onGetBlogs } = useBlogs();
  const theme = useTheme();

  useEffect(() => {
    onGetBlogs();
  }, [onGetBlogs]);

  return (
    <Container
      sx={{
        flex: 1,
        overflow: "auto",
        maxWidth: {
          xs: "100%",
          md: theme.breakpoints.values.md,
          lg: theme.breakpoints.values.md,
          xl: theme.breakpoints.values.lg,
        },
      }}
    >
      <Text variant="h4" sx={{ mb: 2 }}>
        Blog phổ biến
      </Text>
      <Box
        display={{ xs: "flex", sm: "grid" }}
        flexDirection="column"
        gridTemplateColumns={{
          sm: "repeat(2, 1fr)",
          // md: "repeat(3, 1fr)",
          // lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        gridTemplateRows="max-content"
        gap={3}
        p={1}
      >
        {items.map((item) => (
          <BlogCard
            key={item.id}
            id={item.id}
            description={item.description}
            title={item.title}
          />
        ))}
      </Box>
    </Container>
  );
};

export default Page;