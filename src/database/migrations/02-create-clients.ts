import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Client } from '../../types/Clients';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Client>>('clients', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      birthday: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      registrationClient: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('clients');
  }
};
