"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const product_1 = require("./routes/product");
const download_1 = require("./routes/download");
const initDB_1 = require("./utils/initDB");
const app = (0, express_1.default)();
const port = 5000;
(0, initDB_1.dbInit)();
app.use((0, cors_1.default)());
app.use('/products', express_1.default.json(), product_1.router);
app.use('/download', download_1.router);
app.listen(port, () => {
    console.log(`project start at http://localhost:${port}`);
});
