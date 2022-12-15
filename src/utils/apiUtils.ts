import { AxiosResponse } from "axios";
import { ErrorResponse } from "../models";
import { Modal } from "antd";

export const responseHandler = async <T>(
  raw: AxiosResponse<T | ErrorResponse>
): Promise<T | void> => {
  if (Object.keys(raw).find((item) => item === "Message")) {
    return Promise.reject(new Error());
  }

  return Promise.resolve(raw as T);
};

export const showErrorModal = (error: Error) => {
  Modal.error({ title: error.message });
};
