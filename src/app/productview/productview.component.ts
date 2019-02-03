import { Component, OnInit } from '@angular/core';
import {ProductsService} from './../products.service';
import * as _ from 'lodash';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
product: any;
model: any;
  constructor( private service : ProductsService,  private productsroute: ActivatedRoute) { }

  ngOnInit() {
    const proid = this.productsroute.snapshot.paramMap.get('proId');
    console.log(proid);
    const id = parseInt(proid , 10)
    console.log(id);
    this.service.getdata()
    .subscribe(data =>{
      this.product = data;
      console.log(this.product);
      this.model = _.find(this.product, (x) => x.proId === id);
    console.log(this.model);
    })
    
  }

}
