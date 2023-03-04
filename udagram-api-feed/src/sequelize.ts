import {Sequelize} from 'sequelize-typescript';
import {config} from './config/config';


export const sequelize = new Sequelize({

  username: 'postgres',
  password: 'hello1234',
  database: 'postgres',
  host: 'database-1.chjeuyquiior.us-east-1.rds.amazonaws.com',
  dialect :'postgres',
  storage: ':memory:',
});
