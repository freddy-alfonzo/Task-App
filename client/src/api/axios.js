import axios from "axios"

const instance = axios.create({
    baseURL:"https://server-freddy.vercel.app",
    withCredentials: true
})
export default instance