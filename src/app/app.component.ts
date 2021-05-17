import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private loginService:LoginService){

  }
  
  title = 'Group8FSDassignment';
  CustomerName:string=""
  buttonname:string="login"
  ngOnInit(): void{
   this.loginService.currentCustomer.subscribe((res)=>{
     this.CustomerName=res;
     if(res!="")
     this.buttonname="Logout"
  })
   
  }

  doSearch(value: string){
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/products?keyword=${value}`);
  }
}

