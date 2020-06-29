import {default as empty} from "lodash.isempty";

export const isEmpty = (value?: any) => {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "object" && value !== null) {
    return empty(value);
  }
  return !value;
};
