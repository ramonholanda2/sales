import CreateAddressI from './createAddress.interface';

export default interface CreateStoreI {
  id: number;
  name: string;
  address: CreateAddressI[];
}
