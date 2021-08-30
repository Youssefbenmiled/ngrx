import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { ChatApp1Component } from './about-chat/chat-app1/chat-app1.component';
import { HomeComponent } from './home/home.component';
import { SocketComponent } from './about-chat/socket/socket.component';
import { RoomComponent } from './about-chat/room/room.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },

  {
    path:'customers',
    loadChildren:()=>import('./customers/customers.module').then(module=>module.CustomersModule),
    canActivate:[AuthGuard],
    data:{source:'sourceCustomers'}
  },

  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/user.module').then(m => m.UsersModule)
  },
  {
    path:'domaines',
    loadChildren:()=> import('./domaines/domaine.module').then(module=>module.DomaineModule)
  },
  {
    path: 'socket',
    component:SocketComponent
  },
  {
    path: 'chat-app/:id',
    component:ChatApp1Component
  },
  {
    path: 'rooms',
    component:RoomComponent
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
