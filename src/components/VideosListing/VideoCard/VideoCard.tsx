import { FC } from "react";
import { Link } from "react-router-dom";
import { IVideo } from "../../../types";
import * as Styles from "./VideoCard.styles";

interface Props {
  video: IVideo;
}

export const VideoCard: FC<Props> = ({ video }) => {
  const titleToPath = `/video/${video.title[0].replaceAll(" ", "xxx")}`;
  return (
    <Link to={titleToPath}>
      <Styles.VideoCardWrapper>
        <div>{video.title}</div>
        <Styles.VideoImageDescriptionWrapper
          dangerouslySetInnerHTML={{ __html: video.description[0] }}
        />
      </Styles.VideoCardWrapper>
    </Link>
  );
};
