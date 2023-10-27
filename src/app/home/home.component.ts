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
 pants = 'pants' ;
 newarrival  = 'newarrivals' ;
 others = 'others' ;

 Shirt : any = this.getProductShirtCategory() ;
 Pants : any = this.getProductPantsCategory() ;
 NewArrivals : any = this.getProductNewarrivalCategory() ;
 Others : any = this.getProductOthersCategory() ;
 
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

 getProductNewarrivalCategory ( ){
   return getProducts().filter(
     (Products) => Products.category === this.newarrival
 )
 }

 getProductOthersCategory ( ){
   return getProducts().filter(
     (Products) => Products.category === this.others
 )
 }
 

}
