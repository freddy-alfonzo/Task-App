import axios from "axios"

const instance = axios.create({
    baseURL:"https://server-freddy.vercel.app/api",
    withCredentials: true
})
export default instance