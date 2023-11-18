import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/DB/DB';

@Component({
  selector: 'app-jerseys',
  templateUrl: './jerseys.component.html',
  styleUrls: ['./jerseys.component.css']
})
export class JerseysComponent implements OnInit {
  
  jersey  = 'jersey';

  Jersey : any = this.getProductShirtCategory() ;

  getProductShirtCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.jersey
  )
  }

  constructor() { }

  ngOnInit(): void {
  }


}
