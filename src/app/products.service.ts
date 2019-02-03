import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  producturl = 'assets/product-mock.json';
  constructor(private http : HttpClient) { }
  getdata() {
    return this.http.get(this.producturl);
  }
}
