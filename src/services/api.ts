import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const login = (email: string, password: string) => {
  return api.post('/auth/login', { email, password })
}

export const signup = (name: string, email: string, password: string) => {
  return api.post('/auth/register', { name, email, password })
}
