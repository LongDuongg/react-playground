import {ProfilePayload} from "./profile";

export type ArticlePayload = {
  id?: string;
  slug?: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
};

export type ArticleListPayload = {
  tag?: string;
  page: number;
  limit: number;
  username?: string;
};

export type ArticlePreviewListProps = {
  getData: ({page, limit}: {page: number; limit: number}) => Promise<any>;
};

export type SingleArticle = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: ProfilePayload;
};
