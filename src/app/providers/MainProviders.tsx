import { store } from "@/app/stores";
import type { ReactNode } from "react";
import { Provider } from "react-redux";

type Props = {
  children: ReactNode;
};

export const MainProviders = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
