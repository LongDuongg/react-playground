import {ProfilePayload} from "./profile";

export type Comment = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  body: string;
  author: ProfilePayload;
};
