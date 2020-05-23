import { User } from "./User";
import { IAdmin } from "./IAdmin";
import { User_decorator } from "./User_decorator";

@User_decorator("name", "email")
export class Admin implements IAdmin {
  
  invite(user: User) {}
  removeUser(user: User) {}

}
