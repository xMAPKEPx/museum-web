import axios from "axios";

export const instance = axios.create({
  // withCredentials: true,
  // baseURL: "https://reqres.in/api/",
});


instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
    return config
  }
)



instance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
   const originalRequest = {...error.config};
   originalRequest._isRetry = true; 
    if (
      error.response.status === 401 && 
      error.config &&
      !error.config._isRetry
    ) {
      try {
        const resp = await instance.get("https://reqres.in/api/login");
        localStorage.setItem("token", resp.data.token);
        console.log(localStorage.getItem('token'))
        return instance.request(originalRequest);
      } catch (error) {
        console.log("AUTH ERROR");
      }
    }
    throw error;
  }
);