import { sp, user } from "@prisma/client";
import { prisma } from "..";
import { errorToString } from "../utils/utilsfunctions";

const createSp = async (data: sp): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "createSp",
  };
  try {
    const res = await prisma.sp.create({
      data: data,
    });
    response = {
      status: true,
      data: [res],
      message: "New Sp added!",
      function: "createSp",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = { status: false, data: [], message: err, function: "createSp" };
  }
  return response;
};

const getSp = async (): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getSp",
  };
  try {
    const res = await prisma.sp.findMany();
    response = {
      status: true,
      data: res,
      message: "Fatech all sp data",
      function: "getSp",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = { status: false, data: [], message: err, function: "getSp" };
  }
  return response;
};

const getSpById = async (id: number): Promise<response> => {
  let response: response = {
    status: false,
    data: [],
    message: "Something went wrong, try again!",
    function: "getSpById",
  };
  try {
    const res = await prisma.sp.findFirst({
      where: { id: id },
    });
    response = {
      status: true,
      data: [res],
      message: `Got sp ${id} data!`,
      function: "getSpById",
    };
  } catch (e: unknown) {
    const err = errorToString(e);
    response = {
      status: false,
      data: [],
      message: err,
      function: "getSpById",
    };
  }
  return response;
};

export { createSp, getSp, getSpById };
