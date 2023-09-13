import { useEffect, useState } from "react";
import { Button, LoadingScreen } from "components";
import { NotFound } from "components/NotFound/NotFound";
import { useVideosContext } from "context";
import { useNavigate, useParams } from "react-router-dom";
import { IVideo } from "types";
import * as Styles from "./VideoPage.styles";

export const VideoPage = () => {
  const navigate = useNavigate();
  const { title: titleFromParams } = useParams();
  const { getVideoByTitle, videosLoading } = useVideosContext();
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);

  useEffect(() => {
    if (!titleFromParams || videosLoading) return;
    const video = getVideoByTitle(titleFromParams);
    setCurrentVideo(video as IVideo);
  }, [getVideoByTitle, titleFromParams, videosLoading]);

  useEffect(() => {
    if (!videosLoading && currentVideo) return;
    const timeout = setTimeout(() => {
      navigate("/");
    }, 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, [currentVideo, navigate, videosLoading]);

  if (videosLoading) return <LoadingScreen />;
  if (!currentVideo)
    return (
      <NotFound text="Something is wrong, you will be redirected to home page! Not found item or server side error!" />
    );
  const { title, category, description, link, pubDate } = currentVideo;
  return (
    <Styles.VideoPageWrapper>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
      <Styles.VideoPageDataWrapper>
        <Styles.VideoPageDescriptionWrapper
          dangerouslySetInnerHTML={{ __html: description[0] }}
        />
        <Styles.VideoPageDetailsWrapper>
          <div>{title[0]}</div>
          <div>
            Categories:{" "}
            <Styles.VideoPageBoldDetail>
              {category.join(", ")}
            </Styles.VideoPageBoldDetail>
          </div>
          <div>
            Creator:{" "}
            <Styles.VideoPageBoldDetail>
              {currentVideo["dc:creator"][0]["_"]}
            </Styles.VideoPageBoldDetail>
          </div>
          <div>
            Source:{" "}
            <a target="_blank" rel="noreferrer" href={link[0]}>
              {link}
            </a>
          </div>
          <div>
            Pub date:{" "}
            <Styles.VideoPageBoldDetail>
              {pubDate.join("")}
            </Styles.VideoPageBoldDetail>
          </div>
        </Styles.VideoPageDetailsWrapper>
      </Styles.VideoPageDataWrapper>
    </Styles.VideoPageWrapper>
  );
};
