import { isEmpty } from "./functional";

interface AnySource<T = any> {
  [key: string]: T;
}

export const number = (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (typeof data[key] !== "number") {
    return msg || `${alias[key]}必须是数字`;
  }
};

export const string = (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (typeof data[key] !== "string") {
    return msg || `${alias[key]}必须是字符窜`;
  }
};

export const size = (len: number) => (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (!data[key] || data[key].length < len) {
    return msg || `${alias[key]}长度不能小于${len}`;
  }
};

export const gt = (limit: number) => (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (data[key] < limit) {
    return msg || `${alias[key]}不能小于${limit}`;
  }
};

export const lt = (limit: number) => (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (data[key] > limit) {
    return msg || `${alias[key]}不能大于${limit}`;
  }
};

export const required = (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (isEmpty(data[key])) {
    return msg || `${alias[key]}不能为空`;
  }
};

export const compareWith = (field: string) => (
  data: AnySource,
  key: string,
  alias: AnySource<string>
) => (msg: string): string | void => {
  if (data[key] !== data[field]) {
    return msg || `${alias[key]}与${alias[field] || field}不一致`;
  }
};

