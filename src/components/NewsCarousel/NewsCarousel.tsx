import { FC } from "react";
import NewsCard from "./NewsCard/NewsCard";
import { Carousel } from "react-responsive-carousel";
import { INews } from "../../types";
import * as Styles from "./NewsCarousel.styles";

interface Props {
  news: INews[];
}

export const NewsCarousel: FC<Props> = ({ news }) => {
  return (
    <Styles.NewsCarouselWrapper>
      <Carousel autoPlay showThumbs={false} infiniteLoop transitionTime={3}>
        {news.map((item) => {
          return <NewsCard key={item.guid[0]} news={item} />;
        })}
      </Carousel>
    </Styles.NewsCarouselWrapper>
  );
};
