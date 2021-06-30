import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes:Routes=[
  {
    path:'',
    component:HomeComponent
  },

  {
    path:'customers',
    loadChildren:()=>import('./customers/customers.module').then(module=>module.CustomersModule)
  },

  {
  path: 'orders',
  loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
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
