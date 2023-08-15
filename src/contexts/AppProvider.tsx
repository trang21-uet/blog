import ThemeProvider from "./ThemeProvider";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};

export default AppProvider;
