import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class ItemserviceService {
  private products: Product[] = [];
  private price = new BehaviorSubject(0);
  totalprice = this.price.asObservable();
  private cartItems = new BehaviorSubject(this.products);
  totalcartItems = this.cartItems.asObservable();

  setCartItems(products: Product[]) {
    this.cartItems.next(products);
  }

  setPrice(price1: number) {
    this.price.next(price1);
  }

  constructor(private http: HttpClient) {}
//get all products from database
  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }
}
