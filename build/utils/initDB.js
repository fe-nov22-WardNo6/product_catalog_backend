"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbInit = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_typescript_1 = require("sequelize-typescript");
const Phone_1 = require("../models/Phone");
const PhoneExtended_1 = require("../models/PhoneExtended");
const Category_1 = require("../models/Category");
dotenv_1.default.config();
const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
const url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`;
const dbInit = () => {
    return new sequelize_typescript_1.Sequelize(url, {
        models: [PhoneExtended_1.PhoneExtended, Phone_1.Phone, Category_1.Category],
        dialectOptions: {
            ssl: {
                rejectUnauthorized: true,
            },
        },
    });
};
exports.dbInit = dbInit;
