import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import express, { Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import "dotenv";

// routers
import { user } from "./routers/user";
import { query } from "./routers/query";
import { sp } from "./routers/sp";

const PORT = process.env.PORT || 5563;

const app = express();
//middlewhare
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

// routers
app.use("/user", user);
app.use("/query", query);
app.use("/sp", sp);

app.get("/", (req: Request, res: Response) => {
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

export { prisma };
