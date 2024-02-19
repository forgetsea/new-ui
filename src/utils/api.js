import axios from 'axios'
import API_URL from './Const'

function responseHandler(response) {
  const data = response.data
  if (data.resultCode === -1) {
    return Promise.reject(data.message)
  }

  return data.data
}


export function get(url, options = {}) {
  return axios.get(url, options)
    .then(responseHandler)
}

export function post(url, data, options = {}) {
  // Since backend only support form data post,
  // we always convert data to `application/x-www-form-urlencoded format`
  return axios.post(url, data, options)
    .then(responseHandler)
}