import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Item } from '../../types/Items';

type ItemInputtableTypes = Optional<Item, 'id'>;
type ItemSequelizeModelCreator = ModelDefined<Item, ItemInputtableTypes>;
export type ItemSequelizeModel = Model<Item, ItemInputtableTypes>;

const ItemModel: ItemSequelizeModelCreator = db.define('Item', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'items',
  timestamps: false,
  underscored: true,
});

export default ItemModel;
