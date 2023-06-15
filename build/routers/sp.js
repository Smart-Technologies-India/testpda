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
exports.sp = void 0;
const express_1 = __importDefault(require("express"));
const utilsfunctions_1 = require("../utils/utilsfunctions");
const sp_1 = require("../controllers/sp");
const sp = express_1.default.Router();
exports.sp = sp;
sp.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getSp",
    };
    try {
        const result = yield (0, sp_1.getSp)();
        response = result;
    }
    catch (e) {
        const err = (0, utilsfunctions_1.errorToString)(e);
        response = {
            status: false,
            data: [],
            message: err,
            function: "getSp",
        };
    }
    res.send(response);
    res.end();
}));
sp.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "getSpById",
    };
    const id = parseInt(req.params.id);
    try {
        const result = yield (0, sp_1.getSpById)(id);
        response = result;
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
    res.send(response);
    res.end();
}));
sp.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: false,
        data: [],
        message: "Something went wrong, please try again!",
        function: "createSp",
    };
    const data = req.body;
    const validations = {
        name: { required: true, message: "name is required!" },
        mobileNo: { required: true, message: "mobileNo is required!" },
        applicantFullAddress: {
            required: true,
            message: "applicantFullAddress is required!",
        },
        email: { required: true, message: "email is required!" },
        surveyHissaNo: { required: true, message: "surveyHissaNo is required!" },
        landAreaSqrMtr: { required: true, message: "landAreaSqrMtr is required!" },
        illegalSqMtr: { required: true, message: "illegalSqMtr is required!" },
        stageId: { required: true, message: "stageId is required!" },
        formRefId: { required: true, message: "formRefId is required!" },
    };
    response.status = true;
    for (const field in validations) {
        if (validations.hasOwnProperty(field)) {
            if (data[field] === undefined) {
                response = {
                    status: false,
                    data: [],
                    message: validations[field].message,
                    function: "createSp",
                };
                break;
            }
        }
    }
    if (response.status !== false) {
        try {
            const result = yield (0, sp_1.createSp)(req.body);
            response = result;
        }
        catch (e) {
            const err = (0, utilsfunctions_1.errorToString)(e);
            response = {
                status: false,
                data: [],
                message: err,
                function: "createSp",
            };
        }
    }
    res.send(response);
    res.end();
}));
