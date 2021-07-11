import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SharedEntityService } from "../shared-service.service";



@Injectable()
export class DomaineEntityService extends SharedEntityService {
  constructor(http:HttpClient){
    super(http)
  }

}
