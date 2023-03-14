"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const Product_1 = require("../models/Product");
dotenv_1.default.config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const dbInit = () => {
    return new sequelize_typescript_1.Sequelize(url, {
        models: [Product_1.Product],
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    });
};
exports.dbInit = dbInit;
