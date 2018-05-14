import axios from "assets/js/axios.js"
function login(info) {
  // TODO: 把登录的token保存在本地
  return axios.post('/login/admin', info).then((res) => {
    let data = res.data;
    let token = data.token || ''
    if (!token) {
      return {
        code: 1,
        content: '验证失败'
      }
    } else {
      // 保存token
      sessionStorage.setItem(info.username, token);
      return {
        code: 0,
        content: '登录成功'
      }
    }
  })
}
export default login