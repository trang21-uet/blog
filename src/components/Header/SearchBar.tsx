import { SEARCH_PATH } from "@/constant/path";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import { memo, useState } from "react";
import { Input } from "../Form";
import Link from "../Link";

const SearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <Paper sx={{ display: "flex", alignItems: "center", borderRadius: 2 }}>
      <Input
        name="search"
        value={value}
        onChangeText={(text) => setValue(text)}
        size="small"
        label=""
        hiddenLabel
        color="primary"
        type="search"
        sx={{
          width: "600px",
          border: "none",
        }}
        placeholder="Tìm kiếm blog"
      />
      <Link href={`${SEARCH_PATH}?search=${value}`}>
        <SearchIcon sx={{ color: "text.primary" }} />
      </Link>
    </Paper>
  );
};

export default memo(SearchBar);
