import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product.model';
import { Guid } from 'guid-typescript';
import { ProductService } from '../../Services/product.service'
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product = {
    id: "",
    name: "",
    price: 0,
    iva: 0,
    description: "",
    stock: 0,
    categoryId: ""
  };

  constructor(
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit(): void {
    
  }

  addProduct(): void {
    this.product.price = +this.product.price;
    this.product.stock = +this.product.stock;
    this.product.iva = +this.product.iva;
    this.product.id = Guid.EMPTY;
    this.productService.addProduct(this.product)
      .subscribe(product => {
        //this.product.push(employ);
        window.alert(`El producto ${this.product.name} ha sido creado con exito!`);
        this.cancel();
      });
  }
  cancel(): void {
    this.location.back();
  }
}
