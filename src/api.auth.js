import { instance } from "./api.config.js";

export const signup = (surname, name, email, password) => {
    return instance.post("https://reqres.in/api/register", { surname, name, email, password });
}

export const login = (email, password) => {
    return instance.post("https://reqres.in/api/login", {email, password})
}

export const refreshToken = () => {
    return instance.get("/api/refresh");
}

export const logout = () => {
    return instance.post("/api/logout")
}