import Header from "@/components/Header";
import { HEADER_HEIGHT } from "@/constant";
import { Breakpoints } from "@/constant/enum";
import { AppProvider, ThemeProvider } from "@/contexts";
import { Container } from "@mui/material";
import type { AppProps } from "next/app";
import "../../public/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider>
        <Header />
        <Container
          component="main"
          sx={{
            mt: `${HEADER_HEIGHT}px`,
            maxWidth: {
              xs: "100%",
              md: Breakpoints.MD,
              xl: Breakpoints.LG,
            },
          }}
        >
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </AppProvider>
  );
}
