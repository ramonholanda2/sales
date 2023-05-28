import CreateAddressI from './createAddress.interface';

export default interface UserI {
  id: string;
  name: string;
  age: number;
  addresses: CreateAddressI[];
}
