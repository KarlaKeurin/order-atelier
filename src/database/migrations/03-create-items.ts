import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Item } from '../../types/Items';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Item>>('items', {
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
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('items');
  }
};
