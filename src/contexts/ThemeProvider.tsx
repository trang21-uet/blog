"use client";

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
  getInitColorSchemeScript,
} from "@mui/material/styles";
import colorSchemes from "utils/colorSchemes";
import CssBaseline from "@mui/material/CssBaseline";
import { DEFAULT_THEME_MODE } from "constant";
import { Montserrat } from "next/font/google";
import { TypographyOptions } from "@mui/material/styles/createTypography";

const montserrat = Montserrat({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["vietnamese"],
  display: "swap",
  fallback: ["Segoe UI", "sans-serif"],
});

const typography = {
  fontFamily: montserrat.style.fontFamily,
  lineHeight: 1.6,
  fontFeatureSettings: "'tnum' on, 'lnum' on",
  h5: {
    fontSize: 28,
    fontWeight: 700,
  },
  h6: {
    fontSize: 24,
    fontWeight: 600,
  },
  body1: {
    fontSize: 16,
  },
  body2: {
    fontSize: 14,
  },
  subtitle1: {
    fontSize: 20,
  },
  subtitle2: {
    fontSize: 17,
  },
  caption: {
    fontSize: 12,
  },
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

const theme = extendTheme({
  colorSchemes,
  typography: {
    ...typography,
    button: {
      textTransform: "none",
      fontSize: 16,
    },
  },
});

const ThemeProvider = (props: ThemeProviderProps) => {
  const { children } = props;
  getInitColorSchemeScript({
    defaultMode: DEFAULT_THEME_MODE,
    modeStorageKey: "app_mode",
  });
  return (
    <CssVarsProvider theme={theme} defaultMode={DEFAULT_THEME_MODE}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
};

export default ThemeProvider;
