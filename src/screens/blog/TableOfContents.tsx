import { IconButton, Text } from "@/components";
import {
  List,
  ListItem,
  ListItemText,
  Collapse,
  Paper,
  Stack,
} from "@mui/material";
import { memo, useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import Link from "@/components/Link";

type TOCProps = {
  items: string[];
};

const TOC = (props: TOCProps) => {
  const { items } = props;
  const [expanded, setExpanded] = useState(true);

  return (
    <Paper sx={{ p: 3, borderRadius: 4 }} elevation={5}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        onClick={() => setExpanded(!expanded)}
        sx={{ cursor: "pointer" }}
      >
        <Text noSelect variant="h6">
          Mục lục
        </Text>
        <IconButton
          sx={{
            transform: `rotate(${expanded ? "0deg" : "180deg"})`,
            color: "text.primary",
            transition: "all 300ms",
          }}
          onClick={() => setExpanded(!expanded)}
        >
          <ExpandLess />
        </IconButton>
      </Stack>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List component="nav" dense sx={{ pt: 2.5 }}>
          {items.map((item, index) => (
            <ListItem key={index}>
              <Link
                href={`#${item}`}
                variant="text"
                sx={{
                  color: "text.primary",
                  p: 0,
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >{`${index + 1}. ${item}`}</Link>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Paper>
  );
};

export default memo(TOC);
