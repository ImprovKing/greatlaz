import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/DB/DB';
import { getProducts , getProductsId} from 'src/DB/DB';
// import AOS from "aos";


interface Product{
  id: number ; name: string; price: number; SKU: number; category: string; image1: string;
}

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  Products : Product | undefined ;
  others = 'others' ;

  Others : any = this.getProductOthersCategory() ;
  //dimensions 
  
  constructor(
    private route : ActivatedRoute ,
    ) { }

  ngOnInit(): void {
    this.Products = this.getProduct() 
  }

  getProduct(): any {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const productdetail = this.getProductsId(id) ;
    return productdetail ;
  }

  getProductsId(id: number) {
    return Products.find(
        (Products) => Products.id === id
    )
}


  getProductOthersCategory ( ){
    return getProducts().filter(
      (Products) => Products.category === this.others
  )
  }

}
