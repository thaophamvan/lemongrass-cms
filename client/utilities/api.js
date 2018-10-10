import axios from 'axios'

export default {
  fetchDrinkType() {
    return axios.get('/api/drink-type')
  },
  createDrinkType(data) {
    return axios.post('/api/drink-type', data)
  },
  updateDrinkType(data) {
    return axios.put(`/api/drink-type/${data.id}`, data)
  },
  fetchDrinkTypeItem(id) {
    return axios.get(`/api/drink-type/${id}`)
  },
  deleteDrinkType(id) {
    return axios.delete(`/api/drink-type/${id}`)
  }
}
