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
exports.getSpById = exports.getSp = exports.createSp = void 0;
const __1 = require("..");
const utilsfunctions_1 = require("../utils/utilsfunctions");
const createSp = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "createSp",
    };
    try {
        const res = yield __1.prisma.sp.create({
            data: data,
        });
        response = {
            status: true,
            data: [res],
            message: "New Sp added!",
            function: "createSp",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "createSp" };
    }
    return response;
});
exports.createSp = createSp;
const getSp = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getSp",
    };
    try {
        const res = yield __1.prisma.sp.findMany();
        response = {
            status: true,
            data: res,
            message: "Fatech all sp data",
            function: "getSp",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "getSp" };
    }
    return response;
});
exports.getSp = getSp;
const getSpById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getSpById",
    };
    try {
        const res = yield __1.prisma.sp.findFirst({
            where: { id: id },
        });
        response = {
            status: true,
            data: [res],
            message: `Got sp ${id} data!`,
            function: "getSpById",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getSpById",
        };
    }
    return response;
});
exports.getSpById = getSpById;
