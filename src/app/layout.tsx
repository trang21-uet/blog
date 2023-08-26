import Header from "@/components/Header";
import { AppProvider } from "@/contexts";
import ThemeProvider from "@/contexts/ThemeProvider";
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
            {children}
          </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}