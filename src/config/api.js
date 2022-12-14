import axios from "axios";

// axios.defaults.baseURL = 'http://cfd-reactjs.herokuapp.com'
// axios.defaults.baseURL = import.meta.env.VITE_API_HOST

const api = axios.create({
    baseURL: import.meta.env.VITE_API_HOST,
});

api.interceptors.response.use(config => {
  return config
})

api.interceptors.response.use(res => {
    return res.data
})

export default api