import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product.model';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id == null){
      return;
    } 
    
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.productService.deleteProduct(id)
        .subscribe((data: Product) => {
          window.alert(`El producto ${data.name} ha sido eliminado con exito!`);
          this.cancel();
        });
    }
  }
  
  cancel(): void {
    this.location.back();
  }
}
