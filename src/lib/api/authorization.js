import axios from './axios'

export const register = ({ id, name, password }) => {
  return axios.post('/api/beluga/register', { id, name, password })
}

export const login = ({ id, password }) => {
  return axios.post('/api/beluga/login', { id, password })
}

export const check = (token) => {
  return axios.get('/api/beluga/me', { params: { accessToken: token } })
}

export const logout = () => {
  return axios.get('/api/logout')
}
