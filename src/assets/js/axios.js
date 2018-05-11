import baseAxios from 'axios';
import {BASE_URL} from 'config/base.js'
const axios = baseAxios.create({
  baseURL: BASE_URL,
  timeout: 2000
})

export default axios