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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
const express_1 = __importDefault(require("express"));
const utilsfunctions_1 = require("../utils/utilsfunctions");
const user_1 = require("../controllers/user");
const user = express_1.default.Router();
exports.user = user;
user.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getUser",
    };
    try {
        const result = yield (0, user_1.getUser)();
        response = result;
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getUser",
        };
    }
    res.send(response);
    res.end();
}));
user.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getUserById",
    };
    const id = parseInt(req.params.id);
    try {
        const result = yield (0, user_1.getUserById)(id);
        response = result;
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
    res.send(response);
    res.end();
}));
user.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "createUser",
    };
    const data = req.body;
    const validations = {
        name: { required: true, message: "name is required!" },
        password: { required: true, message: "password is required!" },
        mobile: { required: true, message: "mobile is required!" },
        email: { required: true, message: "email is required!" },
        gender: { required: true, message: "gender is required!" },
        dob: { required: true, message: "dob is required!" },
        role: { required: true, message: "role is required!" },
    };
    response.status = true;
    for (const field in validations) {
        if (validations.hasOwnProperty(field)) {
            if (data[field] === undefined) {
                response = {
                    status: false,
                    data: [],
                    message: validations[field].message,
                    function: "createUser",
                };
                break;
            }
        }
    }
    if (response.status !== false) {
        try {
            const result = yield (0, user_1.createUser)(req.body);
            response = result;
        }
        catch (e) {
            const err = (0, utilsfunctions_1.errorToString)(e);
            response = {
                status: false,
                data: [],
                message: err,
                function: "createUser",
            };
        }
    }
    res.send(response);
    res.end();
}));
