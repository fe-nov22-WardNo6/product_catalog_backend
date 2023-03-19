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
const documentation_1 = require("./routes/documentation");
const count_1 = require("./routes/count");
const initDB_1 = require("./utils/initDB");
const app = (0, express_1.default)();
const port = 5000;
(0, initDB_1.dbInit)();
app.use((0, cors_1.default)());
app.use('/phones', express_1.default.json(), phone_1.router);
app.use('/download', download_1.router);
app.use('/categories', categories_1.router);
app.use('/count', count_1.router);
app.get('/', documentation_1.router);
app.listen(port, () => {
    console.log(`project start at http://localhost:${port}`);
});
