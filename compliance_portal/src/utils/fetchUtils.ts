import { getToken } from "./authUtils";

export const jsonHeaders = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${getToken()}`,
};
