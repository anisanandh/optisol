import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash'
import {ProductsService} from './../products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
product: any;
pro: {}
  constructor( private productservice: ProductsService ) {
   }
  ngOnInit() {
 this.productservice.getdata()
 .subscribe(data =>{
   this.product = data;
 })
  }
onSearch(value:string){
  if (!!value){
    this.pro= _.find(this.product, (x) => x.category === value);
    this.product=[];
    this.product.push(this.pro);
    console.log(this.pro)
  }
  else {
    this.productservice.getdata()
 .subscribe(data =>{
   this.product = data;
 })
  }  

}
}
 