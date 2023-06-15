import { query, user } from "@prisma/client";
import { prisma } from "..";
import { errorToString } from "../utils/utilsfunctions";

const createQuery = async (data: query): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "createQuery",
  };
  try {
    const res = await prisma.query.create({
      data: data,
    });
    response = {
      status: true,
      data: [res],
      message: "New Query added!",
      function: "createQuery",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "createQuery",
    };
  }
  return response;
};

const getQuery = async (): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getQuery",
  };
  try {
    const res = await prisma.query.findMany();
    response = {
      status: true,
      data: res,
      message: "Fatech all query data",
      function: "getQuery",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = { status: false, data: [], message: err, function: "getQuery" };
  }
  return response;
};

const getQueryById = async (id: number): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getQueryById",
  };
  try {
    const res = await prisma.query.findFirst({
      where: { id: id },
    });
    response = {
      status: true,
      data: [res],
      message: `Got Query ${id} data!`,
      function: "getQueryById",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getQueryById",
    };
  }
  return response;
};

export { createQuery, getQuery, getQueryById };
