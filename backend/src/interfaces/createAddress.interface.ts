import AssociationType from './associationAddressTypes.interface';

export default interface CreateAddressI {
  addressID: number;
  city: string;
  houseNumber: number;
  state: string;
  cep: string;
  typeAssociation: AssociationType;
  associationID: number;
}
