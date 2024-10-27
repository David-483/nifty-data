import axios from 'axios';


var baseURL = process.env.REACT_APP_BACKEND_URL;
const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);
export const forgetpassword = (formData) => API.post('/user/forgotpassword', formData);
export const resetpassword = ({  resetpasswordtoken,password }) => API.put(`/user/resetpassword/${resetpasswordtoken}`, { password: password })