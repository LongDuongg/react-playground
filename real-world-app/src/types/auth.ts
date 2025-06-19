import {ApiRes} from "./api";
import {User} from "./user";

export type LoginPayload = {
  email: string;
  password: string;
};

export interface LoginRes extends ApiRes {
  user: User;
}
