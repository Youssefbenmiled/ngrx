import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, first, map, switchMap, tap } from 'rxjs/operators';
import { UserFacade } from '../user.facade';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users$:Observable<User>;


  constructor(private userFacade: UserFacade,private activatedRoute:ActivatedRoute) {
    userFacade.loadAll()
   }

  ngOnInit(): void {
    this.userFacade.all$.subscribe(data=>console.log(data))
  }

  addUser(){
    this.userFacade.update(new User())
  }


}
