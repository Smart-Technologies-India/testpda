import { user } from "@prisma/client";
import { prisma } from "..";
import { errorToString } from "../utils/utilsfunctions";

const createUser = async (data: user): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "addUser",
  };
  try {
    data.dob = new Date(data.dob!);
    const res = await prisma.user.create({
      data: data,
    });
    response = {
      status: true,
      data: [res],
      message: "New User added!",
      function: "addUser",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = { status: false, data: [], message: err, function: "addUser" };
  }
  return response;
};

const getUser = async (): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getUser",
  };
  try {
    const res = await prisma.user.findMany();
    response = {
      status: true,
      data: res,
      message: "Fatech all user data",
      function: "getUser",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = { status: false, data: [], message: err, function: "getUser" };
  }
  return response;
};

const getUserById = async (id: number): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getUserById",
  };
  try {
    const res = await prisma.user.findFirst({
      where: { id: id },
    });
    response = {
      status: true,
      data: [res],
      message: `Got User ${id} data!`,
      function: "getUserById",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getUserById",
    };
  }
  return response;
};

export { createUser, getUser, getUserById };
