import { User } from "./user";

export interface Person extends User {
  name: string,
  birthday: Date | string,
  bio: string
}
