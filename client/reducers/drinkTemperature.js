import { push } from 'connected-react-router'
import api from '../utilities/api'

// Constants
export const UPDATE_DRINK_TEMPERATURE_DATA = 'drink-temperature/UPDATE_DRINK_TEMPERATURE_DATA'
export const RESET_DRINK_TEMPERATURE_DATA  = 'drink-temperature/RESET_DRINK_TEMPERATURE_DATA'

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
    let {data, ...newData} = drinkTemperature

    let response = await api.createDrinkTemperature(newData)

    dispatch(push('/drink-temperature'))
  }
}

export const updateDrinkTemperature = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkTemperature = state.drinkTemperature
    let {data, ...newData} = drinkTemperature

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

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_DRINK_TEMPERATURE_DATA]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [RESET_DRINK_TEMPERATURE_DATA]: () => initialState
}

// Reducer
const initialState = {
  data: [],
  id: '',
  _rev: '',
  name: '',
  description: '',
  desired_temperature: ''
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}