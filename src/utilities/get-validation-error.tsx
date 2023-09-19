import { TypeWithKey } from "../models/type-with-key";

export const getValidationErrors = (errorCode: any) => {
  const codeMatcher: TypeWithKey<string> = {
    ERR_NETWORK: "Network error",
  };

  return codeMatcher[errorCode] || "Unknown error";
};
