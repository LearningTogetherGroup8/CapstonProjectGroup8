export class Product {
	productId:number;
	resturantName:string;
    price:number;
    imageUrl:string;
    productName:string;
    constructor(productId:number,resturantName:string,price:number,imageUrl:string,productName:string){
        this.productId=productId;
        this.resturantName=resturantName;
        this.price=price;
        this.imageUrl=imageUrl;
        this.productName=productName;
    }
}