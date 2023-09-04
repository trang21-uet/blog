import { store } from "@/store/configureStore";
import { Provider } from "react-redux";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  return <Provider store={store}>{children}</Provider>;
};

export default AppProvider;
