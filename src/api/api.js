import axios from "axios"


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "40bb3342-9f88-4621-be93-98a913ff7653",
    }
})

export const usersAPI = {
    getUsers: (page = 1, pageSize = 5) => instance.get(`users?page=${page}&count=${pageSize}`).then(responce => responce.data),
    follow: (userId) => instance.post(`follow/${userId}`, {}).then(responce => responce.data),
    unFollow: (userId) => instance.delete(`follow/${userId}`, {}).then(responce => responce.data)
}

export const profileAPI = {
    getProfile: (userId) => instance.get(`profile/${userId}`).then(responce => responce.data),
    getStatus: (userId) => instance.get(`profile/status/${userId}`).then(responce => responce.data),
    updateStatus: (status) => instance.put(`profile/status`, {status}).then(responce => responce.data),
    updateProfile: (profileFields) => instance.put(`profile`, profileFields).then(responce => responce.data),
    savePhoto: (file) => {
        const formData = new FormData()
        formData.append('image', file)
        return instance.put(`profile/photo`, formData, {
            headers: "Content-Type: multipart/form-data"
        })
            .then(responce => responce.data)
    },
}

export const loginAPI = {
    auth: () => instance.get(`auth/me`).then(responce => responce.data),
    userLogin: (email, password, rememberMe = false, captcha=null) => instance.post(`auth/login`, {
        email,
        password,
        rememberMe,
        captcha
    }).then(responce => responce.data),
    userLogout: () => instance.delete(`auth/login`).then(responce => responce.data),
    getCaptcha: () => instance.get(`security/get-captcha-url`).then(responce => responce.data)
}