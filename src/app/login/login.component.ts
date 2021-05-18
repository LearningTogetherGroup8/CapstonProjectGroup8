import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from '../model/Customer';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  customer: Customer[] = [];
  message: string = '';
  errormessage: string = '';

  loginForm = new FormGroup({
    emailId: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private loginService: LoginService, private router: Router) {
    this.loginService.setCustomerName('');
  }

  ngOnInit(): void {
    this.loginService.setCustomerName('');
  }

  //validating and find the customer details from database
  validate() {
    this.findCustomer();
  }

  findCustomer() {
    this.loginService
      .findCustomerByEmailId(this.loginForm.value.emailId)
      .subscribe((res) => {
        this.customer = res;
        console.log(this.customer);
        this.checkCustomer();
      });
  }
  checkCustomer() {
    this.message = '';
    this.errormessage = '';

    if (this.customer[0] == undefined)
      alert('invalid email Address Please Sign Up.');
    else if (
      this.customer[0].email == this.loginForm.value.emailId &&
      this.customer[0].password == this.loginForm.value.password
    ) {
      this.message = 'Sucess';
      this.loginService.setCustomerName(
        'Welcome!!! ' + this.customer[0].firstName
      );
      this.router.navigateByUrl(`/`);
    } else {
      this.errormessage = 'Invalid Email Or Password';
      alert(this.errormessage);
    }
  }
}
