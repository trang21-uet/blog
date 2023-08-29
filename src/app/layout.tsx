import Header from "@/components/Header";
import { HEADER_HEIGHT } from "@/constant";
import { Breakpoints } from "@/constant/enum";
import { AppProvider } from "@/contexts";
import ThemeProvider from "@/contexts/ThemeProvider";
import { Container } from "@mui/material";
import type { Metadata } from "next";
import "../../public/styles/global.scss";

export const metadata: Metadata = {
  title: "My Blog",
  description: "My Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <ThemeProvider>
            <Header />
            <Container
              sx={{
                mt: `${HEADER_HEIGHT}px`,
                maxWidth: {
                  xs: "100%",
                  md: Breakpoints.MD,
                  xl: Breakpoints.LG,
                },
              }}
            >
              {children}
            </Container>
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
