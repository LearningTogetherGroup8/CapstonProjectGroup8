export class OrderCustomer{
    Order_Customer_Id:number;
	firstName:string;
	lastName:string;
	email:string;
    constructor(  Order_Customer_Id:number,
        firstName:string,
        lastName:string,
        email:string){
            this.Order_Customer_Id=Order_Customer_Id;
            this.firstName=firstName;
            this.lastName=lastName;
            this.email=email;
            

    }
}