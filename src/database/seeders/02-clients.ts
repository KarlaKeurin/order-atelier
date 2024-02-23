import { QueryInterface } from 'sequelize';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('clients', [
      {
        id: 1,
        name: 'John Doe',
        email: 'test@test.com',
        phoneNumber: '(81) 91234-5678',
        birthday: '1990-01-01',
        registrationClient: new Date(),
      },
      {
        id: 2,
        name: 'Jone Doe',
        email: 'test@test.com',
        phoneNumber: '(81) 91234-7568',
        birthday: '1990-01-02',
        registrationClient: new Date(),
      }
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('clients', {});
  }
};
