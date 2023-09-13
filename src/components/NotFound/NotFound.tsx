import { FC } from "react";
import * as Styles from "./NotFound.styles";

interface Props {
  text: string;
}

export const NotFound: FC<Props> = ({ text }) => {
  return <Styles.NotFoundWrapper>{text}</Styles.NotFoundWrapper>;
};
