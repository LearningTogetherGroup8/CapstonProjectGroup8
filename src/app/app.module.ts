import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdersModule } from './orders/orders.module';

import { ItemsComponent } from './items/items.component';
import { ApproutingRoutingModule } from './approuting-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgControl } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    ApproutingRoutingModule,
    OrdersModule,
  
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
