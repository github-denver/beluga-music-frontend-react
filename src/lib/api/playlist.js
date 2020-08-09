import axios from './axios'

export const playlist = ({ category, number }) => {
  return axios.post('/api/beluga/playlist', { category, number })
}
