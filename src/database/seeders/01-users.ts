import { QueryInterface } from 'sequelize';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS || 10;

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.bulkInsert('users', [
      {
        id: 1,
        username: 'admin',
        position: 'admin',
        password: bcrypt.hashSync('admin', SALT_ROUNDS),
      },
      {
        id: 2,
        username: 'user',
        position: 'user',
        password: bcrypt.hashSync('user', SALT_ROUNDS),
      }
    ], {});
  },
  
  down(queryInterface: QueryInterface) {
    return queryInterface.bulkDelete('users', {});
  }
};
