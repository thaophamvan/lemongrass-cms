import axios from 'axios'
import constants from '../constants'

export default {
  // drink-type
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
  },
  // drink-temperature
  fetchDrinkTemperature() {
    return axios.get(constants.drinkTemperature)
  },
  createDrinkTemperature(data) {
    return axios.post(constants.drinkTemperature, data)
  },
  updateDrinkTemperature(data) {
    return axios.put(`${constants.drinkTemperature}/${data.id}`, data)
  },
  fetchDrinkTemperatureItem(id) {
    return axios.get(`${constants.drinkTemperature}/${id}`)
  },
  deleteDrinkTemperature(id) {
    return axios.delete(`${constants.drinkTemperature}/${id}`)
  }
}
