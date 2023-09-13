import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { INews } from "types";
import { parseString } from "xml2js";

interface INewsContext {
  newsLoading: boolean;
  news: INews[];
  newsCount: number;
  getNewsByTitle: (title: string) => INews | undefined;
  setNewsCount: Dispatch<SetStateAction<number>>;
  newsError: boolean;
}

const NewsContext = createContext<INewsContext | null>(null);

export const NewsContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [newsCount, setNewsCount] = useState(10);
  const [news, setNews] = useState<INews[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(false);

  useEffect(() => {
    if (news.length) return;
    const fetchFn = async () => {
      try {
        setNewsLoading(true);
        const data = await fetch("/feed/news");
        if (data.status !== 200) throw Error("Error here");
        const dataText = await data.text();
        setNewsLoading(false);

        parseString(dataText, function (err, result) {
          if (err) console.log(err);
          const items = result?.rss?.channel?.[0]?.item;
          setNews(items);
        });
      } catch (error) {
        setNews([]);
        setNewsError(true);
        setNewsLoading(false);
      }
    };
    fetchFn();
  }, [news.length]);

  const getNewsByTitle = useCallback(
    (title: string) => {
      const titleWithSpaces = title.replaceAll("xxx", " ");
      const foundItem = news.find((item) => item.title[0] === titleWithSpaces);
      return foundItem;
    },
    [news]
  );

  const newsByCount = useMemo(() => {
    return news.slice(0, newsCount);
  }, [news, newsCount]);

  return (
    <NewsContext.Provider
      value={{
        newsLoading,
        news: newsByCount,
        newsCount,
        setNewsCount,
        getNewsByTitle,
        newsError,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw Error("useNewsContext is used outside of NewsContext");
  }
  return context;
};
