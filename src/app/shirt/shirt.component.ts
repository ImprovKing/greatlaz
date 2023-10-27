import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/DB/DB';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css']
})
export class ShirtComponent implements OnInit {

  shirts  = 'shirts';

  Shirt : any = this.getProductShirtCategory() ;

  getProductShirtCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.shirts
  )
  }


  constructor() { }

  ngOnInit(): void {
  }

}
