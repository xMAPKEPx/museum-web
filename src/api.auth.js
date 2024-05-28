import { instance } from "./api.config.js";

export const signup = (surname, name, email, password) => {
    return instance.post("https://reqres.in/api/register", { surname, name, email, password });
}

export const login = (email, password) => {
    return instance.post("http://127.0.0.1:8000/auth/signin/", {email, password})
}

export const refreshToken = () => {
    return instance.get("/api/refresh");
}

export const logout = () => {
    localStorage.removeItem('token')
}