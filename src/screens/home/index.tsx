import { Stack } from "@mui/material";
import { Button, Text } from "@/components";
import { Input } from "@/components/Form";
import Link from "@/components/Link";
import { BLOG_PATH } from "@/constant/path";

const Page = () => {
  return (
    <Stack p={3} alignItems="start" spacing={3}>
      <Text variant="h3">Title</Text>
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
        <Input name="email" label="Input" />
        <Input
          name="email"
          type="password"
          label="Password"
          error="Error message"
        />
      </Stack>
      <Link color="primary" href={BLOG_PATH}>
        Blog
      </Link>
    </Stack>
  );
};

export default Page;
