import dotenv from 'dotenv';
import { Sequelize } from 'sequelize-typescript';
import { Phone } from '../models/Phone';
import { PhoneExtended } from '../models/PhoneExtended';
import { Category } from '../models/Category';

dotenv.config();

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;

export const dbInit = () => {
  return new Sequelize(url, {
    models: [PhoneExtended, Phone, Category],
    dialectOptions: {
      ssl: {
        rejectUnauthorized: true,
      },
    },
  });
};
