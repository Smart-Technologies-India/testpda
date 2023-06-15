import axios from "axios";
import express, { NextFunction, Response, Request } from "express";
import { errorToString } from "../utils/utilsfunctions";
import { createQuery, getQuery, getQueryById } from "../controllers/query";
const query = express.Router();

query.get("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getQuery",
  };

  try {
    const result = await getQuery();
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getQuery",
    };
  }
  res.send(response);
  res.end();
});

query.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getQueryById",
  };

  const id: number = parseInt(req.params.id);

  try {
    const result = await getQueryById(id);
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getQueryById",
    };
  }
  res.send(response);
  res.end();
});

query.post("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "createQuery",
  };

  const data: any = req.body;

  const validations: { [key: string]: any } = {
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
      const result = await createQuery(req.body);
      response = result;
    } catch (e: unknown) {
      const err = errorToString(e);
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
});
export { query };
