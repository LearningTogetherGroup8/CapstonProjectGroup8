import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemserviceService } from '../items/itemservice.service';
import { Product } from '../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
    cartItems: Product[]=[];


  constructor(private router:Router,private itemService:ItemserviceService) { }

  ngOnInit(): void {
    this.itemService.totalcartItems.subscribe((res)=>{
      this.cartItems=res;
});
  }
  

   

}
