import axios from "asserts/js/axios"
function login(info) {
  return axios.get('/login', {
    params: info
  })
}
export default login