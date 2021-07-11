import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { StoreInterface } from "../store/store";
import { Domaine } from "./domaine.model";
import { domaineFacade } from "./domaine.state";


 @Injectable({ providedIn: 'root' })
export class DomaineFacade extends domaineFacade{
  constructor(store:Store<StoreInterface> ){
    super(Domaine,store);
  }
}
