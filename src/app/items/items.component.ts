import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../model/Product';
import { ItemserviceService } from './itemservice.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

 
  allproducts:Product[]=[];
  currentResturant:any="AdiGas";
  keyword:string=""
  constructor(private itemservice:ItemserviceService,private route: ActivatedRoute) {
    
   }

   ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.currentResturant = params['resturant'];
      this.keyword=params['keyword']
      if(this.currentResturant==undefined && this.keyword==undefined)
         this.currentResturant="AdiGas"
      this.getallProducts();
    });
    
  }
  
  getallProducts(){
    
    this.itemservice.findAllProducts().subscribe(
      (res)=>{
       this.allproducts=[]
      res.forEach(element => {
              
           if(this.keyword==undefined && element.resturantName==this.currentResturant)
           this.allproducts.push(element)
           if(this.currentResturant==undefined && (element.productName.toLocaleLowerCase()==this.keyword.toLocaleLowerCase() || element.productName.toLocaleLowerCase().includes(this.keyword.toLocaleLowerCase())))
           this.allproducts.push(element)
           
      });
        
      }
    )
    console.log(this.allproducts)
  }

}
