import empty from "lodash/isEmpty";

export const isEmpty = (value?: any) => {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "object" && value !== null) {
    return empty(value);
  }
  return !value;
};
