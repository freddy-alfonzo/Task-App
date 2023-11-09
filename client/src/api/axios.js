import axios from "axios"

const instance = axios.create({
    baseURL:"https://server-freddy.vercel.app/api"
})
export default instance