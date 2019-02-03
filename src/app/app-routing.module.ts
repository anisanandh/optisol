import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './product/product.component';
import {ProductviewComponent} from './productview/productview.component'
const routes: Routes = [
  {
    path: 'products',
      component: ProductComponent,  
  },
  {
    path: 'productview/:proId',
    component: ProductviewComponent,
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
