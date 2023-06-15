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
exports.query = void 0;
const express_1 = __importDefault(require("express"));
const utilsfunctions_1 = require("../utils/utilsfunctions");
const query_1 = require("../controllers/query");
const query = express_1.default.Router();
exports.query = query;
query.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getQuery",
    };
    try {
        const result = yield (0, query_1.getQuery)();
        response = result;
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getQuery",
        };
    }
    res.send(response);
    res.end();
}));
query.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getQueryById",
    };
    const id = parseInt(req.params.id);
    try {
        const result = yield (0, query_1.getQueryById)(id);
        response = result;
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
    res.send(response);
    res.end();
}));
query.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "createQuery",
    };
    const data = req.body;
    const validations = {
        stageId: { required: true, message: "stageId is required!" },
        formRefId: { required: true, message: "formRefId is required!" },
        retFormActionID: {
            required: true,
            message: "retFormActionID is required!",
        },
        formUserId: { required: true, message: "formUserId is required!" },
        toUserId: { required: true, message: "toUserId is required!" },
        queryType: { required: true, message: "queryType is required!" },
        remarkComment: { required: true, message: "remarkComment is required!" },
        documentUrl: { required: true, message: "documentUrl is required!" },
        queryStatus: { required: true, message: "queryStatus is required!" },
    };
    response.status = true;
    for (const field in validations) {
        if (validations.hasOwnProperty(field)) {
            if (data[field] === undefined) {
                response = {
                    status: false,
                    data: [],
                    message: validations[field].message,
                    function: "createQuery",
                };
                break;
            }
        }
    }
    if (response.status !== false) {
        try {
            const result = yield (0, query_1.createQuery)(req.body);
            response = result;
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
    }
    res.send(response);
    res.end();
}));
