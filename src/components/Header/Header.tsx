import { FC } from "react";
import * as Styles from "./Header.styles";
import { HeaderItems } from "./HeaderItems/HeaderItems";

interface Props {
  newsCount: number;
  videosCount: number;
  onNewsItemClick: (count: number) => void;
  onVideoItemClick: (count: number) => void;
}

export const Header: FC<Props> = ({
  newsCount,
  videosCount,
  onNewsItemClick,
  onVideoItemClick,
}) => {
  return (
    <Styles.HeaderWrapper>
      <Styles.HeaderLogoWrapper>GamesPortal</Styles.HeaderLogoWrapper>
      <HeaderItems
        newsCount={newsCount}
        videosCount={videosCount}
        onNewsItemClick={onNewsItemClick}
        onVideoItemClick={onVideoItemClick}
      />
    </Styles.HeaderWrapper>
  );
};
