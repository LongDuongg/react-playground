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

export type Article = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: Date;
  updatedAt: Date;
  favorited: boolean;
  favoritesCount: number;
  author: ProfilePayload;
};
