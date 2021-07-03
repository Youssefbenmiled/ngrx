import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserComponent } from './user/user.component';
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
  }
]

@NgModule({
  declarations: [UserAddComponent, UserListComponent, UserEditComponent, UserComponent],
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
