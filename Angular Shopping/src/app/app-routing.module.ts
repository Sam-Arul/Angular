import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { CategoryComponent } from './category/category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductComponent } from './view-product/view-product.component';


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"create",
    component: ProductCreateComponent
  },
  {
    path:"category",
    component:CategoryComponent
  },
  {
    path:"category/view",
    component:ViewCategoryComponent
  },
  {
    path:"product",
    component:ViewProductComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
