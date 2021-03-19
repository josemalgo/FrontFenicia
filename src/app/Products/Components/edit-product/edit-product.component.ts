import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product.model';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product: Product = {
    id: "",
    name: "",
    price: 0,
    iva: 0,
    description: "",
    stock: 0,
    categoryId: ""
  };

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void{
    const id = this.route.snapshot.paramMap.get("id");
    if(id == null){
      return;
    }
    this.productService.getProductById(id)
      .subscribe((data: Product) => this.product = data);
  }

  updateProduct(): void{
    this.product.price = +this.product.price;
    this.product.stock = +this.product.stock;
    this.product.iva = +this.product.iva;
    this.productService.updateProduct(this.product.id, this.product)
      .subscribe(() => {
        window.alert(`El producto ${this.product.name} ha sido editado con exito!`);
        this.cancel();
      });
  }

  cancel(): void {
    this.location.back();
  }

}
