import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { Customer } from '../model/Customer';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  
  signUpForm = new FormGroup({
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    emailId: new FormControl(''),
    password: new FormControl(''),
    confirmPassword:new FormControl('')
  });
  customer:Customer=new Customer("","","","");

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }

  submit()
  {
    this.customer.email=this.signUpForm.value.emailId;
    this.customer.firstName=this.signUpForm.value.firstName;
    this.customer.lastName="";
    this.customer.password=this.signUpForm.value.password; 
    console.log(this.customer)
    this.saveCustomer(this.customer)
    this.router.navigateByUrl(`/login`);
  }
  saveCustomer(customer:Customer)
  {
    this.loginService.insertCustomer(customer).subscribe((res)=>{

    })
  }
}
