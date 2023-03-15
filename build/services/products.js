"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllWithPagination = exports.getAll = void 0;
const Product_1 = require("../models/Product");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return Product_1.Product.findAll(); });
exports.getAll = getAll;
const getAllWithPagination = (perPage, currentPage) => __awaiter(void 0, void 0, void 0, function* () {
    const productsOnPage = perPage * currentPage;
    const offset = productsOnPage - perPage;
    const limit = perPage;
    return Product_1.Product.findAll({
        offset,
        limit,
    });
});
exports.getAllWithPagination = getAllWithPagination;
