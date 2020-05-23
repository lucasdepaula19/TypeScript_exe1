import { User } from "./User";

export interface IAdmin {
  //name: string;

  invite(user: User): void;
  removeUser(user: User): void;
}
