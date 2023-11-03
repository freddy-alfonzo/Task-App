import axios from "./axios.js"

export const registerRequest = (user) => axios.post("/register", user)

export const loginRequest = (user) => axios.post("/login", user)

export const verifyTokenRequest = (cookie) => axios.get("/verify", cookie)

export const logoutRequest = (cookie) => () => axios.get("/logout")