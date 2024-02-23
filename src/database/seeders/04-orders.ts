import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('orders', [
      {
        id: 1,
        clientId: 1,
        itemIds: 1,
        totalPrice: 50,
        quantityItems: 1,
        registrationOrder: new Date(),        
      },
      {
        id: 2,
        clientId: 2,
        itemIds: 1,
        totalPrice: 50,
        quantityItems: 1,
        registrationOrder: new Date(),
    },
    {
        id: 3,
        clientId: 2,
        itemIds: 2,
        totalPrice: 100,
        quantityItems: 1,
        registrationOrder: new Date(),
    }
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('orders', {});
  }
};
