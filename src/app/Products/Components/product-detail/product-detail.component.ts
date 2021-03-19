import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  
  product: Product = {
    id: "",
    name: "",
    price: 0,
    iva: 0,
    description: "",
    stock: 0,
    categoryId: ""
  };

  title: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
