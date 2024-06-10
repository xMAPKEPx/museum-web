import axios from "axios";
import {instance} from "./api.config.js";

export const signup = (last_name, first_name, email, password, re_password) => {
    return axios.post("https://engine.vstrechya.space/auth/signup/", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password,
        re_password: re_password
     });
}

export const login = (email, password) => {
    return instance.post("/auth/signin/", {email, password})
}

export const refreshToken = () => {
    return instance.post("/auth/api/token/refresh/", {
        refresh: localStorage.getItem("refresh-token")
    });
}

export const logout = () => {
    localStorage.removeItem('access-token')
}

export const getUser = (id) => {
    return instance.get(`/users/${id}/`)
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`)
}

export const changeMyPhoto = (photo) => {
    return instance.post(`/users/upload_avatar/`, photo)
}

export const changeProfileInfo = (id, last_name, first_name, image_url, phone) => {
    return instance.post(`/users/${id}/edit`, {
        first_name,
        last_name,
        image_url,
        phone
    })
}

export const getExhibitions = () => {
    return instance.get(`/exhibitions`)
}

export const getExhibitionDetails = (id) => {
    return instance.get(`/exhibitions/${id}/`)
}

export const getArchieves = () => {
    return instance.get(`/archieves`)
}

export const getArchieveDetails = (id) => {
    return instance.get(`/archieves/${id}/`)
}