import axios from "axios";

function createInstance() {
  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 1000,
  });
}


export default createInstance();

const ApiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_HOST
})

ApiInstance.interceptors.request.use((req) => {
  const token = localStorage.getItem('token')
  req.headers.Authorization = 'Bearer ' + token
  req.headers.Accept = 'application/json'
  return req
})

export {
  ApiInstance
}