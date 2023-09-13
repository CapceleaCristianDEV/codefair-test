import { FC } from "react";
import * as Styles from "./HeaderItems.styles";

const items = [10, 25, 50, 75, 100];

interface HeaderItemCountProps {
  title: string;
  currentCount: number;
  onClick: (item: number) => void;
}

interface HeaderItemsProps {
  newsCount: number;
  videosCount: number;
  onNewsItemClick: (count: number) => void;
  onVideoItemClick: (count: number) => void;
}

const HeaderItemCount: FC<HeaderItemCountProps> = ({
  title,
  currentCount,
  onClick,
}) => {
  return (
    <Styles.HeaderItemWrapper>
      <div>{title}</div>
      <Styles.HeaderItemCountWrapper>
        {items.map((item) => {
          return (
            <Styles.HeaderItemNumberWrapper
              // styled-components warning, wants a string
              activeitem={(currentCount === item).toString()}
              key={item}
              onClick={() => onClick(item)}
            >
              {item}
            </Styles.HeaderItemNumberWrapper>
          );
        })}
      </Styles.HeaderItemCountWrapper>
    </Styles.HeaderItemWrapper>
  );
};

export const HeaderItems: FC<HeaderItemsProps> = ({
  newsCount,
  videosCount,
  onNewsItemClick,
  onVideoItemClick,
}) => {
  return (
    <Styles.HeaderItemsWrapper>
      <HeaderItemCount
        title="News Items:"
        currentCount={newsCount}
        onClick={onNewsItemClick}
      />
      <HeaderItemCount
        title="Videos Items:"
        currentCount={videosCount}
        onClick={onVideoItemClick}
      />
    </Styles.HeaderItemsWrapper>
  );
};
