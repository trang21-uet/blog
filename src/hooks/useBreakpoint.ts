import { useMemo } from "react";
import { Breakpoint, useMediaQuery, useTheme } from "@mui/material";
import { Breakpoints } from "@/constant/enum";

const useBreakpoints = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(Breakpoints.XS));
  const isSm = useMediaQuery(theme.breakpoints.down(Breakpoints.SM));
  const isMd = useMediaQuery(theme.breakpoints.down(Breakpoints.MD));
  const isLg = useMediaQuery(theme.breakpoints.down(Breakpoints.LG));
  const isXl = useMediaQuery(theme.breakpoints.down(Breakpoints.XL));

  const ratio: Breakpoint = useMemo(() => {
    switch (true) {
      case Boolean(isSm):
        return Breakpoints.XS;
      case Boolean(isMd):
        return Breakpoints.SM;
      case Boolean(isLg):
        return Breakpoints.MD;
      case Boolean(isXl):
        return Breakpoints.LG;
      default:
        return Breakpoints.XL;
    }
  }, [isSm, isMd, isLg, isXl]);

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    currentRatio: ratio as Breakpoint,
  };
};

export default useBreakpoints;
