import axios from "axios"

const instance = axios.create({
    baseURL:"https://freddy-server.vercel.app",
    withCredentials:"true"
})
export default instance