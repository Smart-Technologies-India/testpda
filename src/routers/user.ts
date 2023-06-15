import axios from "axios";
import express, { NextFunction, Response, Request } from "express";
import { errorToString } from "../utils/utilsfunctions";
import { createUser, getUser, getUserById } from "../controllers/user";
const user = express.Router();

user.get("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getUser",
  };

  try {
    const result = await getUser();
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getUser",
    };
  }
  res.send(response);
  res.end();
});

user.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "getUserById",
  };

  const id: number = parseInt(req.params.id);

  try {
    const result = await getUserById(id);
    response = result;
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getUserById",
    };
  }
  res.send(response);
  res.end();
});

user.post("/", async (req: Request, res: Response, next: NextFunction) => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, please try again!",
    function: "createUser",
  };

  const data: any = req.body;

  const validations: { [key: string]: any } = {
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
      const result = await createUser(req.body);
      response = result;
    } catch (e: unknown) {
      const err = errorToString(e);
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
});

export { user };
