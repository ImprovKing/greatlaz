import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
// import { PolicyComponent } from './policy/policy.component';
// import { ProductdetailComponent } from './productdetail/productdetail.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { OthersComponent } from './others/others.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

const routes: Routes = [
  {path:"" ,component :HomeComponent},
//   {path : 'policy', component : PolicyComponent} ,
  {path : 'product/details/:id' , component : ProductdetailsComponent },
  {path : 'newarrival/category/section/products/newarrival' , component : NewarrivalComponent } ,
  {path : 'shirts/category/section/products/shirts' , component : ShirtComponent } ,
  {path : 'pants/category/section/products/pants' , component : PantsComponent } ,
  {path : 'others/category/section/products/others' , component : OthersComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
