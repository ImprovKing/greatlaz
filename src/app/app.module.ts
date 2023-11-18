import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShirtComponent } from './shirt/shirt.component';
import { PantsComponent } from './pants/pants.component';
import { AppRoutingModule } from './app.routing';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { FootwearComponent } from './footwear/footwear.component';
import { JerseysComponent } from './jerseys/jerseys.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShirtComponent,
    PantsComponent,
    NavbarComponent ,
    FooterComponent,
    ProductdetailsComponent,
    FootwearComponent,
    JerseysComponent
  ],
  imports: [
    BrowserModule ,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
