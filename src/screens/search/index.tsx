import { useBlogs } from "@/store/blog";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Search = () => {
  const { query } = useRouter();
  const { onGetBlogs } = useBlogs();

  useEffect(() => {
    if (!query) return;
    onGetBlogs({ search: query.search as string });
  }, [onGetBlogs, query]);

  return <></>;
};

export default Search;
