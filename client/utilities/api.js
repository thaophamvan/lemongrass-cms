import axios from 'axios'
import constants from '../constants'

export default {
  fetchDrinkType() {
    return axios.get(constants.drinkType)
  },
  createDrinkType(data) {
    return axios.post(constants.drinkType, data)
  },
  updateDrinkType(data) {
    return axios.put(`${constants.drinkType}/${data.id}`, data)
  },
  fetchDrinkTypeItem(id) {
    return axios.get(`${constants.drinkType}/${id}`)
  },
  deleteDrinkType(id) {
    return axios.delete(`${constants.drinkType}/${id}`)
  }
}
