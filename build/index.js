"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.prisma = prisma;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
require("dotenv");
// routers
const user_1 = require("./routers/user");
const query_1 = require("./routers/query");
const sp_1 = require("./routers/sp");
const PORT = process.env.PORT || 5563;
const app = (0, express_1.default)();
//middlewhare
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
// routers
app.use("/user", user_1.user);
app.use("/query", query_1.query);
app.use("/sp", sp_1.sp);
app.get("/", (req, res) => {
    res.status(200).send({
        status: true,
        data: [
            {
                name: "pdaapi",
                version: "1.0.1",
                author: "analog sombra",
                website: "https://www.analogsombra.com",
            },
        ],
        message: "Wlecome to pda",
        function: "PDA",
    });
    res.end();
});
app.use((req, res, next) => {
    res.status(404).send({
        status: false,
        data: [],
        message: "End point is not defined",
        function: "Error",
    });
    res.end();
});
//routes
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
