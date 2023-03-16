"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const phone_1 = require("./routes/phone");
const download_1 = require("./routes/download");
const categories_1 = require("./routes/categories");
const initDB_1 = require("./utils/initDB");
const app = (0, express_1.default)();
const port = 5000;
(0, initDB_1.dbInit)();
app.use((0, cors_1.default)());
app.use('/phones', express_1.default.json(), phone_1.router);
app.use('/download', download_1.router);
app.use('/categories', categories_1.router);
app.get('/', (req, res) => {
    res.send(`
  BASE_URL: https://product-catalog-backend-vhc5.onrender.com
  1.Get:  /phones
  Return list of phones.
  - Without search params: get collection of first 16 phones. Example:
  BASE_URL/phones
  - With pagination: required url search params:
  perPage and currentPage. Example:
  BASE_URL/phones?perPage=5&currentPage=2

  2.Get:  /phones/:phoneId
  Return extend information of phone.
  - Required params "phoneUrl". Example:
  BASE_URL/phones/phoneId

  3.Get:  /downloads
  Return image of item.
  - Required search params "url". Example:
  BASE_URL/download?url=img/phones/apple-iphone-7/black/00.jpg

  4.Get:  /categories
  Return all categories. Example:
  BASE_URL/categories
   `);
});
app.listen(port, () => {
    console.log(`project start at http://localhost:${port}`);
});
