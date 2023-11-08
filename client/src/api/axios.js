import axios from "axios"

const instance = axios.create({
    baseURL:"https://freddy-task-app.vercel.app/api",
    withCredentials: true
})
export default instance