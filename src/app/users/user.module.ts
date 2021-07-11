import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';

import {  RouterModule, Routes } from '@angular/router';
import { User } from './user.model';
import { UserEntityService } from './user.service';
import { UserFacade } from './user.facade';
import { StoreModule } from '@ngrx/store';
import { userReducer, USER_CONST } from './user.state';
import { NgrxAutoEntityModule } from '@briebug/ngrx-auto-entity';

const routes:Routes=[
  {
    path:'',
    component:UserListComponent
  },

]

@NgModule({
  declarations: [ UserListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),


    StoreModule.forFeature(USER_CONST,userReducer),
    NgrxAutoEntityModule.forFeature()

  ],
  providers:[
    {provide:User,useClass:UserEntityService},
    UserEntityService,
    UserFacade
  ]
})
export class UsersModule { }
