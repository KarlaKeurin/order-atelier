import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Order } from '../../types/Orders';

type OrderInputtableTypes = Optional<Order, 'id'>;
type OrderSequelizeModelCreator = ModelDefined<Order, OrderInputtableTypes>;
export type OrderSequelizeModel = Model<Order, OrderInputtableTypes>;

const OrderModel: OrderSequelizeModelCreator = db.define('Order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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
}, {
  tableName: 'orders',
  timestamps: false,
  underscored: true,
});

export default OrderModel;
