import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/Product';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(url, {
    models: [Product],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
