import { List, ListItem, ListItemText } from "@mui/material";
import { memo } from "react";

type OutlineProps = {
  outlines: string[];
  active: boolean;
};

const Outline = (props: OutlineProps) => {
  const { outlines, active } = props;

  return (
    <List dense sx={{ pr: 2, position: "sticky", top: 0 }}>
      {outlines.map((item, index) => (
        <ListItem key={index}>
          <ListItemText
            primary={`${index + 1}.${item}`}
            sx={
              active
                ? { fontSize: 20, fontWeight: "500", color: "text.primary" }
                : { color: "text.disabled" }
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default memo(Outline);
