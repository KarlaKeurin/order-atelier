import { DataTypes, Model, QueryInterface } from 'sequelize';
import { Order } from '../../types/Orders';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<Order>>('orders', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      itemIds: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantityItems: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      registrationOrder: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('orders');
  }
};
