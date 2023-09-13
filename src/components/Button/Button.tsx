import { FC, PropsWithChildren } from "react";
import * as Styles from "./Button.styles";

interface Props extends PropsWithChildren {
  onClick: () => void;
}

export const Button: FC<Props> = ({ onClick, children }) => {
  return (
    <Styles.ButtonWrapper onClick={onClick}>{children}</Styles.ButtonWrapper>
  );
};
