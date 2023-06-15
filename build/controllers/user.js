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
exports.getUserById = exports.getUser = exports.createUser = void 0;
const __1 = require("..");
const utilsfunctions_1 = require("../utils/utilsfunctions");
const createUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "addUser",
    };
    try {
        data.dob = new Date(data.dob);
        const res = yield __1.prisma.user.create({
            data: data,
        });
        response = {
            status: true,
            data: [res],
            message: "New User added!",
            function: "addUser",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "addUser" };
    }
    return response;
});
exports.createUser = createUser;
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getUser",
    };
    try {
        const res = yield __1.prisma.user.findMany();
        response = {
            status: true,
            data: res,
            message: "Fatech all user data",
            function: "getUser",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = { status: false, data: [], message: err, function: "getUser" };
    }
    return response;
});
exports.getUser = getUser;
const getUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, try again!",
        function: "getUserById",
    };
    try {
        const res = yield __1.prisma.user.findFirst({
            where: { id: id },
        });
        response = {
            status: true,
            data: [res],
            message: `Got User ${id} data!`,
            function: "getUserById",
        };
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getUserById",
        };
    }
    return response;
});
exports.getUserById = getUserById;
