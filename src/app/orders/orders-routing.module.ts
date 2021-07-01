import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path: '', component: OrdersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes,
    // {preloadingStrategy:PreloadAllModules}
    )
  ],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
