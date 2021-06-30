import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()

export class TodosEffect{

  constructor(private http:HttpClient){

  }

}