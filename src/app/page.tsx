import { AppProvider } from "contexts";
import { Home } from "screens";

export default function Page() {
  return (
    <AppProvider>
      <Home />
    </AppProvider>
  );
}
