import {
  Header,
  LoadingScreen,
  NewsCarousel,
  NotFound,
  VideoListing,
} from "components";
import { AppLayout } from "layout/AppLayout/AppLayout";
import { useVideosContext } from "context";
import { useNewsContext } from "context/NewsContext";

export const Home = () => {
  const {
    videosLoading,
    videos,
    setVideosCount,
    setCurrentVideoPage,
    videosCount,
    currentVideoPage,
    videosError,
  } = useVideosContext();

  const { news, newsLoading, newsCount, setNewsCount, newsError } =
    useNewsContext();

  const onNewsItemClick = (itemCount: number) => setNewsCount(itemCount);

  const onVideoItemClick = (itemCount: number) => {
    window.scroll(0, 0);
    setVideosCount(itemCount);
    setCurrentVideoPage(1);
  };

  const onChangeVideoPage = (page: number) => {
    window.scroll(0, 0);
    setCurrentVideoPage(page);
  };

  if (newsLoading || videosLoading) return <LoadingScreen />;
  if (newsError || videosError) {
    return (
      <NotFound text="Something is wrong! Not found item or server side error!" />
    );
  }
  return (
    <>
      <Header
        newsCount={newsCount}
        videosCount={videosCount}
        onNewsItemClick={onNewsItemClick}
        onVideoItemClick={onVideoItemClick}
      />
      <AppLayout>
        <NewsCarousel news={news} />
        <VideoListing
          videos={videos.items}
          currentPage={currentVideoPage}
          videoPages={videos.pages}
          onChangePage={onChangeVideoPage}
        />
      </AppLayout>
    </>
  );
};
