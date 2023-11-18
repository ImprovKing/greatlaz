import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { getProducts } from 'src/DB/DB';

interface Product {
  id : number ;
  name : String ;
  price : Number ;
  SKU : Number ;
  category : String 
}


@Component({
 selector: 'app-home',
 templateUrl: './home.component.html',
 styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 products :Observable<any> | undefined ;
 items: Product[] | undefined;

 shirts  = 'shirts';
 jersey  = 'jersey';
 pants = 'pants' ;
 footwear  = 'Footwears' ;

 Shirt : any = this.getProductShirtCategory() ;
 Pants : any = this.getProductPantsCategory() ;
 Jersey : any = this.getProductJerseyCategory() ;
 Footwear : any = this.getProductsFootwearCategory() ;
 
 constructor(){}

 ngOnInit(): void { 
  }

 getProductShirtCategory ( ){
   return getProducts().filter(
     (Products) => Products.category === this.shirts
 )
 }

 getProductPantsCategory (){
   return getProducts().filter(
     (Products) => Products.category === this.pants
 )
 }

 getProductJerseyCategory ( ){
   return getProducts().filter(
     (Products) => Products.category === this.jersey
 )
 }

 getProductsFootwearCategory ( ){
   return getProducts().filter(
     (Products) => Products.category === this.footwear
 )
 }
 

}
