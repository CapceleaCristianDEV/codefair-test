interface INewsCreator {
  _: string;
  $: Record<string, string>;
}

interface INewsContent {
  $: { medium: string; url: string };
}

export interface INews {
  title: string[];
  link: string[];
  "dc:creator": INewsCreator[];
  pubDate: string[];
  guid: string[];
  category: string[];
  "media:content": INewsContent[];
  description: string[];
}

export type IVideo = INews;
