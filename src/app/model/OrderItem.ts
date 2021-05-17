
import {Product} from "./Product"
import {Orders} from "./Orders"
export class OderItem{
    orderItemId:number;
    quantity:number
    product:Product;
    orders:Orders;
    constructor( orderItemId:number,
        quantity:number,
        product:Product,
        orders:Orders){
            this.orderItemId=orderItemId;
            this.quantity=quantity;
            this.product=product;
            this.orders=orders;

    }
}