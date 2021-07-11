import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SharedEntityService } from "../shared-service.service";



@Injectable({ providedIn: 'root' })
export class DomaineEntityService extends SharedEntityService {
  constructor(http:HttpClient){
    super(http)
  }

}
