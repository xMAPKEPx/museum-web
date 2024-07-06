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
    }).then((response) => {
        if (response.status === 401) {
            window.location.assign("/login")
        }
    }).catch(err => console.log('Error: ', err))
}

export const logout = () => {
    localStorage.removeItem('access-token')
}

export const getUser = (id) => {
    return instance.get(`/users/${id}/`)
}

export const getMyInfo = () => {
    return instance.get(`/users/me/`).catch(() => refreshToken())
        .catch(err => console.log('Error: ', err));
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

export const getCollections = async (id) => {
    const response = await instance.get(`/users/${id}/`)
    return response.data.collections
}

export const getCollectionDetails = (id) => {
    return instance.get(`/collections/${id}/`)
}

export const createCollection = (name) => {
    return instance.post(`/collections/create/`, {
        name,
    })
}

export const updateCollection = (id, formData) => {
    return instance.post(`/collections/${id}/items/add/`, formData);
}