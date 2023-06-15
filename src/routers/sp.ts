import axios from "axios";
import express, { NextFunction, Response, Request } from "express";
import { errorToString } from "../utils/utilsfunctions";
import { createSp, getSp, getSpById } from "../controllers/sp";
const sp = express.Router();

sp.get("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getSp",
  };

  try {
    const result = await getSp();
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getSp",
    };
  }
  res.send(response);
  res.end();
});

sp.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getSpById",
  };

  const id: number = parseInt(req.params.id);

  try {
    const result = await getSpById(id);
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getSpById",
    };
  }
  res.send(response);
  res.end();
});

sp.post("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "createSp",
  };

  const data: any = req.body;

  const validations: { [key: string]: any } = {
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
      const result = await createSp(req.body);
      response = result;
    } catch (e: unknown) {
      const err = errorToString(e);
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
});

export { sp };
