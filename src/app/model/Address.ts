export class Address {
  addressId: number;
  city: string;
  country: string;
  state: string;
  street: string;
  zipCode: string;
  constructor(
    addressId: number,
    city: string,
    country: string,
    state: string,
    street: string,
    zipCode: string
  ) {
    this.addressId = addressId;
    this.city = city;
    this.country = country;
    this.state = state;
    this.street = street;
    this.zipCode = zipCode;
  }
}
