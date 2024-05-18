import { instance } from "./api.config.js";

export const AuthService = () => {

    const login = (email, password) => {
        return instance.post("/api/login", {email, password})
    }
    
    const refreshToken = () => {
        return instance.get("/api/refresh");
    }
    
    const logout = () => {
        return instance.post("/api/logout")
    }
}