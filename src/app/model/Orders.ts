import { Address } from 'cluster';
import { OrderCustomer } from './OrderCustomer';

export class Orders {
  orderId: number;
  totalQuantity: number;
  totalPrice: number;
  orderCustomer: OrderCustomer;
  address: Address;
  constructor(
    orderId: number,
    totalQuantity: number,
    totalPrice: number,
    orderCustomer: OrderCustomer,
    address: Address
  ) {
    this.orderId = orderId;
    this.totalQuantity = totalQuantity;
    this.totalPrice = totalPrice;
    this.orderCustomer = orderCustomer;
    this.address = address;
  }
}
