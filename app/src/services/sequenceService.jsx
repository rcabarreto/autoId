import axios from 'axios'

const API_URL = `http://${process.env.API_URL}:${process.env.API_PORT}/api`

export default {

  loadSequences(token) {
    return axios
      .get(`${API_URL}/sequence`, { headers: { Auth: token } })
      .then(response => response.data)
      .then(this.sortSequences)
      .catch(error => Promise.reject(error.response))
  },

  sortSequences(sequences) {
    return sequences
  },

  addSequence(name, token) {
    return axios
      .post(`${API_URL}/sequence`, { name }, { headers: { Auth: token } })
      .then(response => response.data)
      .catch(error => Promise.reject(error.response))
  },

  resetSequence(sequenceId, newValue, token) {
    return axios
      .patch(`${API_URL}/sequence/${sequenceId}`, { newValue }, { headers: { Auth: token } })
      .then(response => response.data)
      .catch(error => Promise.reject(error.response))
  },

  deleteSequence(sequenceId, token) {
    return axios
      .delete(`${API_URL}/sequence/${sequenceId}`, { headers: { Auth: token } })
      .then(response => response.data)
      .catch(error => Promise.reject(error.response))
  },

}
