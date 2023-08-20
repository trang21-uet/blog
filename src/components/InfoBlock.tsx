import { Stack } from "@mui/material";
import { memo } from "react";
import Text, { TextProps } from "./Text";

type InfoBlockProps = {
  icon: React.ReactNode;
  text?: string;
  textProps?: TextProps;
};

const InfoBlock = (props: InfoBlockProps) => {
  const { icon, text = "--", textProps } = props;
  return (
    <Stack direction="row" spacing={1}>
      {icon}
      <Text color="disabled" {...textProps}>
        {text}
      </Text>
    </Stack>
  );
};

export default memo(InfoBlock);
