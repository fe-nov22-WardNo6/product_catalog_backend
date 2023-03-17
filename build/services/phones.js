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
exports.getAllCount = exports.getByPhoneId = exports.getAllWithPagination = exports.getAll = void 0;
const Phone_1 = require("../models/Phone");
const PhoneExtended_1 = require("../models/PhoneExtended");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return Phone_1.Phone.findAll(); });
exports.getAll = getAll;
const getAllWithPagination = (perPage, currentPage) => __awaiter(void 0, void 0, void 0, function* () {
    const productsOnPage = perPage * currentPage;
    const offset = productsOnPage - perPage;
    const limit = perPage;
    return Phone_1.Phone.findAll({
        offset,
        limit,
    });
});
exports.getAllWithPagination = getAllWithPagination;
const getByPhoneId = (phoneId) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(phoneId);
    return PhoneExtended_1.PhoneExtended.findOne({ where: { id: phoneId } });
});
exports.getByPhoneId = getByPhoneId;
const getAllCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return Phone_1.Phone.count();
});
exports.getAllCount = getAllCount;
