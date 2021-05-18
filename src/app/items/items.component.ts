import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../model/Product';
import { ItemserviceService } from './itemservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
  allproducts: Product[] = [];
  cartItems: Product[] = [];
  currentResturant: any = 'AdiGas';
  cartPrice: number = 0;
  keyword: string = '';
  constructor(
    private itemservice: ItemserviceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //get queryparams from route
    this.route.queryParams.subscribe((params) => {
      this.currentResturant = params['resturant'];
      this.keyword = params['keyword'];
      if (this.currentResturant == undefined && this.keyword == undefined)
        this.currentResturant = 'AdiGas';
      this.getallProducts();
    });
    // subscribe itemService for getting total cart price.
    this.itemservice.totalprice.subscribe((res) => {
      this.cartPrice = res;
    });
    //  subscribe itemservice  for getting carts items.
    this.itemservice.totalcartItems.subscribe((res) => {
      this.cartItems = res;
    });
  }
// add a item into cart and item price to total price.
  addtocart(item: Product) {
    this.itemservice.setPrice(Number(this.cartPrice) + Number(item.price));
    this.cartItems.push(item);
    this.itemservice.setCartItems(this.cartItems);
  }
// get all priduct from item service by subscribing  findAllProduct. And put into allProducts array according to query parameter.
  getallProducts() {
    this.itemservice.findAllProducts().subscribe((res) => {
      this.allproducts = [];
      res.forEach((product) => {
        if (
          this.keyword == undefined &&
          product.resturantName == this.currentResturant
        )
          this.allproducts.push(product);
        if (
          this.currentResturant == undefined &&
          product.productName
            .toLocaleLowerCase()
            .includes(this.keyword.toLocaleLowerCase())
        )
          this.allproducts.push(product);
      });
    });
    console.log(this.allproducts);
  }
}
