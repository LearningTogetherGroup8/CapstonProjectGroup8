import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private customerName = new BehaviorSubject('');
  currentCustomer = this.customerName.asObservable();

  constructor(private httpclient: HttpClient) {}

  setCustomerName(name: string) {
    this.customerName.next(name);
  }
//get the customer details from the database
  findCustomerByEmailId(emailId: string): Observable<Customer[]> {
    const url = 'http://localhost:8080/getCustomerByEmail/' + emailId;
    return this.httpclient.get<Customer[]>(url);
  }
  //insert customer into database
  insertCustomer(customer: Customer) {
    const url = 'http://localhost:8080/customers';
    return this.httpclient.post<Customer>(url, customer);
  }
}
