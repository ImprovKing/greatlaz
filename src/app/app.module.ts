import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewarrivalComponent } from './newarrival/newarrival.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { OthersComponent } from './others/others.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarComponent } from './_components/sidebar/sidebar.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FootwearComponent } from './footwear/footwear.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewarrivalComponent,
    ShirtComponent,
    PantsComponent,
    OthersComponent ,
    NavbarComponent ,
    FooterComponent,
    SidebarComponent,
    ProductdetailsComponent,
    FootwearComponent
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
