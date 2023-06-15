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
exports.getQueryById = exports.getQuery = exports.createQuery = void 0;
const __1 = require("..");
const utilsfunctions_1 = require("../utils/utilsfunctions");
const createQuery = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "createQuery",
    };
    try {
        const res = yield __1.prisma.query.create({
            data: data,
        });
        response = {
            status: true,
            data: [res],
            message: "New Query added!",
            function: "createQuery",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "createQuery",
        };
    }
    return response;
});
exports.createQuery = createQuery;
const getQuery = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getQuery",
    };
    try {
        const res = yield __1.prisma.query.findMany();
        response = {
            status: true,
            data: res,
            message: "Fatech all query data",
            function: "getQuery",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "getQuery" };
    }
    return response;
});
exports.getQuery = getQuery;
const getQueryById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getQueryById",
    };
    try {
        const res = yield __1.prisma.query.findFirst({
            where: { id: id },
        });
        response = {
            status: true,
            data: [res],
            message: `Got Query ${id} data!`,
            function: "getQueryById",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getQueryById",
        };
    }
    return response;
});
exports.getQueryById = getQueryById;
