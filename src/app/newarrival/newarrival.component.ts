import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/DB/DB';
import { Products } from 'src/DB/DB'

@Component({
  selector: 'app-newarrival',
  templateUrl: './newarrival.component.html',
  styleUrls: ['./newarrival.component.css']
})
export class NewarrivalComponent implements OnInit {
  
  newarrival  = 'newarrivals' ;
  
  NewArrivals : any = this.getProductNewarrivalCategory() ;

  getProductNewarrivalCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.newarrival
  )
  }

  constructor() { }

  ngOnInit(): void {
  }

}
