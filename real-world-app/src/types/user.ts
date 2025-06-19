import {ApiRes} from "./api";

export type UpdateUserPayload = {
  image: string;
  username: string;
  bio: string;
  email: string;
  password: string;
};

export type User = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: string;
};

export interface UserRes extends ApiRes {
  user: User;
}
