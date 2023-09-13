import { FC, PropsWithChildren } from "react";
import * as Styles from "./AppLayout.styles";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return <Styles.AppLayoutWrapper>{children}</Styles.AppLayoutWrapper>;
};
