import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ItemserviceService } from './items/itemservice.service';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private loginService: LoginService,
    private itemService: ItemserviceService
  ) {}

  title = 'Group8FSDassignment';
  CustomerName: string = '';
  buttonname: string = 'login';
  price: number = 0;
  ngOnInit(): void {
    // subscribe the login service for login Customer Name
    this.loginService.currentCustomer.subscribe((res) => {
      this.CustomerName = res;
      if (res != '') this.buttonname = 'Logout';
    });
    //subscribe the item service for total price
    this.itemService.totalprice.subscribe((res) => {
      this.price = res;
    });
  }
// Search fuctionality....it will redirect to itemComponent. 
  doSearch(value: string) {
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/products?keyword=${value}`);
  }
}
