import { FC } from "react";
import { Link } from "react-router-dom";
import { INews } from "../../../types";
import * as Styles from "./NewsCard.styles";

interface Props {
  news: INews;
}

const NewsCard: FC<Props> = ({ news }) => {
  const titleToPath = `/news/${news.title[0].replaceAll(" ", "xxx")}`;

  const newsImage = news["media:content"][0].$.url;

  return (
    <Link to={titleToPath}>
      <Styles.NewsCardWrapper key={news.link[0]}>
        <Styles.NewsCardTitleWrapper>
          {news.title[0]}
        </Styles.NewsCardTitleWrapper>
        <img src={newsImage} alt="news" />
      </Styles.NewsCardWrapper>
    </Link>
  );
};

export default NewsCard;
