import { Component, OnInit } from '@angular/core';
import { getProducts } from 'src/DB/DB';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {


  footwears  = 'Footwears';

  Footwears : any = this.getProductFootweartCategory() ;

  getProductFootweartCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.footwears
  )
  }


  constructor() { }

  ngOnInit(): void {
  }


}
