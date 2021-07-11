import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { HomeComponent } from './home/home.component';


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
    canActivate:[AuthGuard]
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
