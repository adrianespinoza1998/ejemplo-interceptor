import axios, { AxiosRequestConfig } from "axios";
import { getValidationErrors } from "../utilities/get-validation-error";
import { SnackbarUtilities } from "../utilities/snackbar-manager";

export const AxiosInterceptor = () => {
  const updateHeader = (request: AxiosRequestConfig) => {
    //Simular token
    const token = "12345678";

    const newHeaders = {
      ...request.headers,
      Authorization: token,
      "Content-Type": "application/json",
    };
    request.headers = newHeaders;
    return request;
  };

  axios.interceptors.request.use((request: any) => {
    console.log("Starting Request", request);
    if (request.url?.includes("assets")) return request;

    return updateHeader(request);
  });

  axios.interceptors.response.use(
    (response) => {
      console.log("Response:", response);
      return response;
    },
    (error) => {
      SnackbarUtilities.error(getValidationErrors(error.code));
      console.log("Error:", getValidationErrors(error.code));
      return Promise.reject(error);
    }
  );
};
