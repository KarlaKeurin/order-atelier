export type Order = {
  id: number;
  clientId: number;
  itemIds: number[];
  totalPrice: number;
  quantityItems: number;
  registrationOrder: Date;
};
