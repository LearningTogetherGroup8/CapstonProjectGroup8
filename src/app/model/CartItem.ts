import { Product } from './Product';

export class CartItem {
  productId: number;
  quantity: number;
  product: Product;
  constructor(productId: number, quantity: number, product: Product) {
    this.productId = productId;
    this.quantity = quantity;
    this.product = product;
  }
}
