import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PolicyComponent } from './policy/policy.component';
// import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { JerseysComponent } from './jerseys/jerseys.component';
import { FootwearComponent } from './footwear/footwear.component';

const routes: Routes = [
  {path:"" ,component :HomeComponent},
//   {path : 'policy', component : PolicyComponent} ,
  {path : 'product/details/:id' , component : ProductdetailsComponent },
  {path : 'shirts/category/section/products/shirts' , component : ShirtComponent } ,
  {path : 'pants/category/section/products/pants' , component : PantsComponent } ,
  {path : 'jerseys/category/section/products/jerseys' , component : JerseysComponent } ,
  {path : 'footwears/category/section/products/footwears' , component : FootwearComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
