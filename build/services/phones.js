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
exports.getCollection = exports.getAllCount = exports.getByPhoneId = exports.getAllWithPagination = exports.getAll = void 0;
const Phone_1 = require("../models/Phone");
const PhoneExtended_1 = require("../models/PhoneExtended");
const sequelize_1 = require("sequelize");
const getAll = () => __awaiter(void 0, void 0, void 0, function* () { return Phone_1.Phone.findAll(); });
exports.getAll = getAll;
const getAllWithPagination = (perPage, currentPage, sortBy) => __awaiter(void 0, void 0, void 0, function* () {
    const productsOnPage = perPage * currentPage;
    const offset = productsOnPage - perPage;
    const limit = perPage;
    switch (sortBy) {
        case 'newest':
            return Phone_1.Phone.findAll({
                order: [['year', 'DESC']],
                offset,
                limit,
            });
        case 'cheapest':
            return Phone_1.Phone.findAll({
                order: [['price', 'ASC']],
                offset,
                limit,
            });
        case 'expensive':
            return Phone_1.Phone.findAll({
                order: [['price', 'DESC']],
                offset,
                limit,
            });
        default:
            return Phone_1.Phone.findAll({
                offset,
                limit,
            });
    }
});
exports.getAllWithPagination = getAllWithPagination;
const getByPhoneId = (phoneId) => __awaiter(void 0, void 0, void 0, function* () {
    return PhoneExtended_1.PhoneExtended.findOne({ where: { id: phoneId } });
});
exports.getByPhoneId = getByPhoneId;
const getAllCount = () => __awaiter(void 0, void 0, void 0, function* () {
    return Phone_1.Phone.count();
});
exports.getAllCount = getAllCount;
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
const getCollection = (collectionName) => __awaiter(void 0, void 0, void 0, function* () {
    const randomIds = [];
    const allCount = yield Phone_1.Phone.count();
    const allPhones = yield Phone_1.Phone.findAll();
    let hotPricePhones;
    let newest;
    switch (collectionName) {
        case 'recommended':
            for (let i = 0; i <= 7; i++) {
                const randomId = getRandomInt(allCount);
                if (randomIds.includes(randomId)) {
                    i--;
                }
                else {
                    randomIds.push(randomId);
                }
            }
            return Phone_1.Phone.findAll({
                where: {
                    id: {
                        [sequelize_1.Op.or]: randomIds,
                    },
                },
            });
        case 'hotPrices':
            hotPricePhones = allPhones
                .sort((a, b) => {
                const differentA = a.fullPrice - a.price;
                const differentB = b.fullPrice - b.price;
                return differentB - differentA;
            })
                .slice(0, 8)
                .map((phone) => phone.id);
            return Phone_1.Phone.findAll({
                where: {
                    id: {
                        [sequelize_1.Op.or]: hotPricePhones,
                    },
                },
            });
        case 'newest':
            newest = allPhones
                .sort((a, b) => b.year - a.year)
                .slice(0, 8)
                .map((phone) => phone.id);
            return Phone_1.Phone.findAll({
                where: {
                    id: {
                        [sequelize_1.Op.or]: newest,
                    },
                },
            });
    }
});
exports.getCollection = getCollection;
