import { Injectable } from '@angular/core';
import { Product } from '../../Models/Product.model'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'https://localhost:44301/api/employees';

  constructor(private http: HttpClient) { }

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductById(id: string): Observable<Product> {
    const url = `${this.url}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.url, product, httpOptions);
  }

  updateProduct(id: string, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.url}/${id}`, product, httpOptions);
  }

  deleteProduct(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.url}/${ id }`, httpOptions);
  }
}
