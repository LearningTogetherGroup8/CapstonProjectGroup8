import { Injectable } from '@angular/core';
import { ItemserviceService } from '../items/itemservice.service';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // allproducts:Product[]=[];
  constructor(public itemservice:ItemserviceService) {
     // this.allproducts=itemservice.findAllProducts().subscribe(data =>this.allproducts=data);
}

}
