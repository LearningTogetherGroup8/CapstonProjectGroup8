import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor(private http: HttpClient) { }
 
  findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/products");
  }
}
