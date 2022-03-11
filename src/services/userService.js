import { getToken } from "./authService";

export function getAuthHeader() {
    return {
      headers: {
        Authorization: "Bearer " + getToken(),
      },
    };
  }