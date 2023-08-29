import { Breakpoints } from "@/constant/enum";
import { useMediaQuery, useTheme } from "@mui/material";

const useBreakpoints = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down(Breakpoints.XS));
  const isSm = useMediaQuery(theme.breakpoints.down(Breakpoints.SM));
  const isMd = useMediaQuery(theme.breakpoints.down(Breakpoints.MD));
  const isLg = useMediaQuery(theme.breakpoints.down(Breakpoints.LG));
  const isXl = useMediaQuery(theme.breakpoints.down(Breakpoints.XL));

  return {
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
  };
};

export default useBreakpoints;
