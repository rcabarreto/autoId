import axios from 'axios'

const API_URL = `http://${process.env.API_URL}:${process.env.API_PORT}/api`

export default {

  signinUser(name, email, password) {
    return axios.post(`${API_URL}/user`, { name, email, password }).then(userObject => userObject).catch(error => Promise.reject(error.response))
  },

  loginUser(email, password, remember = false) {
    return axios.post(`${API_URL}/user/login`, { email, password }).then(response => this.saveUserData(response, remember)).then(userObject => userObject).catch(error => Promise.reject(error.response))
  },

  logoutUser(token) {
    return axios.post(`${API_URL}/user/logout`, {}, { headers: { Auth: token } }).then(response => this.deleteUserData(response.data)).then(response => response).catch(error => Promise.reject(error.response))
  },

  saveUserData(userResponse, remember) {
    const userObject = {
      ...userResponse.data,
    }
    sessionStorage.setItem('SequenceAppUser', JSON.stringify(userObject))
    if (remember) localStorage.setItem('SequenceAppUser', JSON.stringify(userObject))

    return Promise.resolve(userObject)
  },

  deleteUserData(response) {
    return new Promise((resolve) => {
      sessionStorage.removeItem('SequenceAppUser')
      localStorage.removeItem('SequenceAppUser')
      resolve(response)
    })
  },

  loadUserLocalData() {
    const sessionData = sessionStorage.getItem('SequenceAppUser') || undefined
    const storageData = localStorage.getItem('SequenceAppUser') || undefined
    let userObject = {}

    if (sessionData) {
      userObject = JSON.parse(sessionData)
    } else if (storageData) {
      userObject = JSON.parse(storageData)
    }

    return userObject
  },

}
