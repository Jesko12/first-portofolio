import jwtDecode from "jwt-decode";
import http from "./httpService";
import { getAuthHeader } from "./userService";

const authEndpoint = "/login";
const tokenKey = "token";
const logoutEndpoint = "api/logout";

export async function login(email, password){
    const { data } = await http.post(
        authEndpoint,
        {
            email: email,
            password: password,
        },
        {
            headers: {
                "X-Source": "agrocery",
            },
        }
    );
    localStorage.setItem(tokenKey, data["access_token"]);
}

export function getCurrentUser() {
    try {
        const token = localStorage.getItem(tokenKey);
        return jwtDecode(token);
    } catch (e) {
        return null;
    }
}

export async function logout() {
    await http.delete(logoutEndpoint, getAuthHeader());
    localStorage.removeItem(tokenKey);
  }

export function getToken() {
    return localStorage.getItem(tokenKey);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login,
    logout,
    getCurrentUser,
    getToken,
  };