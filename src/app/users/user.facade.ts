import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { StoreInterface } from "src/app/store/store";
import { UserFacadeBase } from "./user.state";
import { User } from "./user.model";


@Injectable()
export class UserFacade extends UserFacadeBase{
  constructor(store:Store<StoreInterface>) {
    super(User,store);
  }

}
