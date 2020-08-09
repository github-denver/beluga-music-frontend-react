import axios from './axios'

export const playlist = ({ category, number }) => {
  return axios.get(`/api/board/${category}/view/${number}`)
}
