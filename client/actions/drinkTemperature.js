import { push } from 'connected-react-router'
import {
  UPDATE_DRINK_TEMPERATURE_DATA,
  RESET_DRINK_TEMPERATURE_DATA
} from './index'
import api from '../utilities/api'

// Actions
export const updateDrinkTemperatureData = (payload) => ({
  type: UPDATE_DRINK_TEMPERATURE_DATA,
  payload
})

export const resetDrinkTemperatureData = () => ({
  type: RESET_DRINK_TEMPERATURE_DATA
})

// Thunks
export const fetchDrinkTemperatureData = () => {
  return async (dispatch) => {
    try {
      let response = await api.fetchDrinkTemperature()
      let data = response.data

      dispatch(updateDrinkTemperatureData({
        data
      }))
    } catch (error) {
      console.log(error)
    }
  }
}

export const createDrinkTemperature = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkTemperature = state.drinkTemperature
    let {name, description, desired_temperature} = drinkTemperature
    let newData = {name, description, desired_temperature}

    let response = await api.createDrinkTemperature(newData)

    dispatch(push('/drink-temperature'))
  }
}

export const updateDrinkTemperature = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkTemperature = state.drinkTemperature
    let {id, _rev, name, description, desired_temperature} = drinkTemperature
    let newData = {id, _rev, name, description, desired_temperature}

    let response = await api.updateDrinkTemperature(newData)

    dispatch(push('/drink-temperature'))
  }
}

export const deleteDrinkTemperature = (id) => {
  return (dispatch, getState) => {
    let state = getState()
    let data = [...state.drinkTemperature.data]

    data = data.filter(item => item.id !== id)

    api.deleteDrinkTemperature(id)

    dispatch(updateDrinkTemperatureData({
      data
    }))
  }
}

export const fetchDrinkTemperatureItem = (id) => {
  return async (dispatch) => {
    let response = await api.fetchDrinkTemperatureItem(id)

    dispatch(updateDrinkTemperatureData(response.data))
  }
}
