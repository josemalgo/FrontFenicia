import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Models/Product.model';
import { ProductService } from '../../Services/product.service';
import { FilterPipe } from '../../../Pipes/filter.pipe';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {

  products: Product[] = [];
  idSelected: string | undefined;
  HighlightRow: number | undefined;
  private _searchText: string = "";
  productsFiltered: Product[] = [];

  get searchText(): string {
    return this._searchText;
  }
  set searchText(val: string) {
    this._searchText = val;
    //this.productsFiltered = this.filter.transform(this.products, val );
  }

  constructor(private productService: ProductService, private filter: FilterPipe) {

  }

  ClickedRow(index: number): void {
    this.HighlightRow = index;
    if (this.productsFiltered.length == 0)
      this.idSelected = this.products[index].id;
    else
      this.idSelected = this.productsFiltered[index].id;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(): void {
    this.productService.getProducts()
      .subscribe((data: Product[]) => this.products = data);
  }

}
