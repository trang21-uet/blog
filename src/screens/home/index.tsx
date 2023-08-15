import { Stack } from "@mui/material";
import { Button, Text } from "components";
import { Input } from "components/Form";

const Page = () => {
  return (
    <>
      <Stack p={3} alignItems="start" spacing={3}>
        <Text>Text</Text>
        <Stack direction="row" spacing={3}>
          <Button color="primary">Primary</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="info">Info</Button>
          <Button color="warning">Warning</Button>
          <Button color="error">Error</Button>
          <Button color="success">Success</Button>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Input label="Input" />
          <Input type="password" label="Password" error="Error message" />
        </Stack>
      </Stack>
    </>
  );
};

export default Page;
