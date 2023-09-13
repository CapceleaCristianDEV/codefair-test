import { FC } from "react";
import { Pagination } from "components/Pagination/Pagination";
import { IVideo } from "../../types";
import { VideoCard } from "./VideoCard/VideoCard";
import * as Styles from "./VideoListing.styles";

interface Props {
  currentPage: number;
  videoPages: number;
  videos: IVideo[];
  onChangePage: (page: number) => void;
}

export const VideoListing: FC<Props> = ({
  currentPage,
  videoPages,
  videos,
  onChangePage,
}) => {
  return (
    <div>
      <Styles.VideoListingWrapper>
        {videos.map((video) => {
          return <VideoCard key={video.guid[0]} video={video} />;
        })}
      </Styles.VideoListingWrapper>
      <Pagination
        currentPage={currentPage}
        pages={videoPages}
        onChange={onChangePage}
      />
    </div>
  );
};
