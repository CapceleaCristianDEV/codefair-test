import {
  Dispatch,
  FC,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
  createContext,
  PropsWithChildren,
  useContext,
} from "react";
import { parseString } from "xml2js";
import { IVideo } from "../types";

interface IVideosData {
  items: IVideo[];
  pages: number;
}

interface IVideosContext {
  videosCount: number;
  currentVideoPage: number;
  videosLoading: boolean;
  videos: IVideosData;
  setVideosCount: Dispatch<SetStateAction<number>>;
  setCurrentVideoPage: Dispatch<SetStateAction<number>>;
  getVideoByTitle: (title: string) => IVideo | undefined;
  videosError: boolean;
}

const VideosContext = createContext<IVideosContext | null>(null);

export const VideosContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [videosCount, setVideosCount] = useState(10);
  const [currentVideoPage, setCurrentVideoPage] = useState(1);
  const [videosLoading, setVideosLoading] = useState(true);
  const [videos, setVideos] = useState<IVideo[]>([]);
  const [videosError, setVideosError] = useState(false);

  useEffect(() => {
    if (videos.length) return;
    const fetchFn = async () => {
      try {
        setVideosLoading(true);
        const data = await fetch("/feed/videos");
        if (data.status !== 200) throw Error("Error here");
        const dataText = await data.text();
        setVideosLoading(false);

        parseString(dataText, function (err, result) {
          if (err) console.log(err);
          const items = result?.rss?.channel?.[0]?.item;
          setVideos(items);
        });
      } catch (error) {
        setVideosError(true);
        setVideosLoading(false);
      }
    };
    fetchFn();
  }, [videos]);

  const getVideoByTitle = useCallback(
    (title: string) => {
      const titleWithSpaces = title.replaceAll("xxx", " ");
      const foundItem = videos.find(
        (item) => item.title[0] === titleWithSpaces
      );
      return foundItem;
    },
    [videos]
  );

  const videosWithPagination = useMemo(() => {
    const startPage = currentVideoPage * videosCount - videosCount;
    const endPage = currentVideoPage * videosCount;
    const numberOfPages = Math.ceil(videos.length / videosCount);
    return { pages: numberOfPages, items: videos.slice(startPage, endPage) };
  }, [videosCount, currentVideoPage, videos]);

  return (
    <VideosContext.Provider
      value={{
        videosLoading,
        videos: videosWithPagination,
        getVideoByTitle,
        setVideosCount,
        setCurrentVideoPage,
        videosCount,
        currentVideoPage,
        videosError,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};

export const useVideosContext = () => {
  const context = useContext(VideosContext);
  if (!context) {
    throw Error("useVideosContext is used outside of VideosContext");
  }
  return context;
};
