import { DataTypes, Model, ModelDefined, Optional } from 'sequelize';
import db from './index';
import { Client } from '../../types/Clients';

type ClientInputtableTypes = Optional<Client, 'id'>;
type ClientSequelizeModelCreator = ModelDefined<Client, ClientInputtableTypes>;
export type ClientSequelizeModel = Model<Client, ClientInputtableTypes>;

const ClientModel: ClientSequelizeModelCreator = db.define('Client', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
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
}, {
  tableName: 'clients',
  timestamps: false,
  underscored: true,
});

export default ClientModel;
