import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('items', [
      {
        id: 1,
        name: 'item1',
        price: 50,
      },
      {
        id: 2,
        name: 'item2',
        price: 100,
      }      
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('items', {});
  }
};
