import { useEffect, useState } from "react";
import { Button, LoadingScreen, NotFound } from "components";
import { useNewsContext } from "context";
import { useNavigate, useParams } from "react-router-dom";
import { INews, IVideo } from "types";
import * as Styles from "./NewsPage.styles";

/* This page is similar as Videos page but with different scope, 
so doesn't make sense to extract it not to repeat, 
but is not good that a thing to two things with different scope */

export const NewsPage = () => {
  const navigate = useNavigate();
  const { title: titleFromParams } = useParams();
  const { getNewsByTitle, newsLoading } = useNewsContext();
  const [currentNews, setCurrentNews] = useState<IVideo | null>(null);

  useEffect(() => {
    if (!titleFromParams || newsLoading) return;
    const news = getNewsByTitle(titleFromParams);
    setCurrentNews(news as INews);
  }, [getNewsByTitle, titleFromParams, newsLoading]);

  useEffect(() => {
    if (!newsLoading && currentNews) return;
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentNews, navigate, newsLoading]);

  if (newsLoading) return <LoadingScreen />;
  if (!currentNews)
    return (
      <NotFound text="Something is wrong, you will be redirected to home page! Not found item or server side error!" />
    );
  const { title, category, description, link, pubDate } = currentNews;
  return (
    <Styles.NewsPageWrapper>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
      <Styles.NewsPageDataWrapper>
        <Styles.NewsPageDescriptionWrapper
          dangerouslySetInnerHTML={{ __html: description[0] }}
        />
        <Styles.NewsPageDetailsWrapper>
          <div>{title[0]}</div>
          <div>
            Categories:{" "}
            <Styles.NewsPageBoldDetail>
              {category.join(", ")}
            </Styles.NewsPageBoldDetail>
          </div>
          <div>
            Creator:{" "}
            <Styles.NewsPageBoldDetail>
              {currentNews["dc:creator"][0]["_"]}
            </Styles.NewsPageBoldDetail>
          </div>
          <div>
            Source:{" "}
            <a target="_blank" rel="noreferrer" href={link[0]}>
              {link}
            </a>
          </div>
          <div>
            Pub date:{" "}
            <Styles.NewsPageBoldDetail>
              {pubDate.join("")}
            </Styles.NewsPageBoldDetail>
          </div>
        </Styles.NewsPageDetailsWrapper>
      </Styles.NewsPageDataWrapper>
    </Styles.NewsPageWrapper>
  );
};
