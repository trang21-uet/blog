import { ThemeMode } from "@/constant/enum";

// Create a theme instance.
const colorSchemes = {
  [ThemeMode.LIGHT]: {
    palette: {
      common: {
        black: "#000000",
        white: "#FFFFFF",
      },
      primary: {
        main: "#ACD2ED",
        light: "#262E43",
        dark: "#CF9FFF",
        contrastText: "#000000",
      },
      secondary: {
        main: "#F7FFF7",
        light: "#1D8DCF",
        dark: "#B19CD9",
        contrastText: "#000000",
      },
      error: {
        main: "#FF5376",
        light: "#F8483E",
        dark: "#FF715B",
        contrastText: "#000000",
      },
      warning: {
        main: "#F3B700",
        light: "#FFAA00",
        dark: "#FFAA00",
        contrastText: "#000000",
      },
      info: {
        main: "#22B1FF",
        light: "#03A9F4",
        dark: "#0288D1",
        contrastText: "#FFFFFF",
      },
      success: {
        main: "#00D181",
        light: "#15FF9D",
        dark: "#18F2B2",
        contrastText: "#000000",
      },
      grey: {
        50: "#FAFAFA",
        100: "#3F3D61",
        200: "#868AA6",
        300: "#34344F",
        400: "#281B28",
        500: "#262E43",
        600: "#2A2854",
        700: "#171431",
        800: "#131722",
        900: "#151D2B",
        A100: "#F5F5F5",
        A200: "#212B4D",
        A400: "#282447",
        A700: "#040215",
      },
      text: {
        primary: "#000000",
        secondary: "#C2B2B4",
        disabled: "#969696",
      },
      divider: "rgba(0, 0, 0, .12)",
      background: {
        paper: "#F7FFF7",
        default: "#F7FFF7",
      },
      action: {
        active: "rgba(0, 0, 0, .54)",
        hover: "#F0F0F0",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, .08)",
        selectedOpacity: 0.08,
        disabled: "#797F94",
        disabledBackground: "rgba(0, 0, 0, .12)",
        disabledOpacity: 0.12,
        focus: "rgba(0, 0, 0, .38)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  },
  [ThemeMode.DARK]: {
    palette: {
      common: {
        black: "#000000",
        white: "#FFFFFF",
      },
      primary: {
        main: "#613DC1",
        light: "#262E43",
        dark: "#C589E8",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#0D0A0B",
        light: "#1D8DCF",
        dark: "#613DC1",
        contrastText: "#FFFFFF",
      },
      error: {
        main: "#F71735",
        light: "#FE4A49",
        dark: "#DB2955",
        contrastText: "#FFFFFF",
      },
      warning: {
        main: "#FE621D",
        light: "#FFAA00",
        dark: "#FFBC3A",
        contrastText: "#FFFFFF",
      },
      info: {
        main: "#3185FC",
        light: "#03A9F4",
        dark: "#48A9A6",
        contrastText: "#FFFFFF",
      },
      success: {
        main: "#3EC300",
        light: "#15FF9D",
        dark: "#00D181",
        contrastText: "#FFFFFF",
      },
      grey: {
        50: "#C3C0DB",
        100: "#3F3D61",
        200: "#868AA6",
        300: "#34344F",
        400: "#281B28",
        500: "#262E43",
        600: "#2A2854",
        700: "#171431",
        800: "#1D2438",
        900: "#151D2B",
        A100: "#F5F5F5",
        A200: "#212B4D",
        A400: "#282447",
        A700: "#040215",
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#868AA6",
        disabled: "#969696",
      },
      divider: "rgba(0, 0, 0, .12)",
      background: {
        paper: "#0C1124",
        default: "#0D0A0B",
      },
      action: {
        active: "rgba(0, 0, 0, .54)",
        hover: "#969696",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, .08)",
        selectedOpacity: 0.08,
        disabled: "#797F94",
        disabledBackground: "#212B4D",
        disabledOpacity: 0.12,
        focus: "rgba(0, 0, 0, .38)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
  },
};

export default colorSchemes;