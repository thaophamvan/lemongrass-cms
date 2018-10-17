import { push } from 'connected-react-router'
import {
  UPDATE_DRINK_TYPE_DATA,
  RESET_DRINK_TYPE_DATA
} from './index'
import api from '../utilities/api'

// Actions
export const updateDrinkTypeData = (payload) => ({
  type: UPDATE_DRINK_TYPE_DATA,
  payload
})

export const resetDrinkTypeData = () => ({
  type: RESET_DRINK_TYPE_DATA
})

// Thunks
export const fetchDrinkTypeData = () => {
  return async (dispatch) => {
    try {
      let response = await api.fetchDrinkType()
      let data = response.data

      dispatch(updateDrinkTypeData({
        data
      }))
    } catch (error) {
      console.log(error)
    }
  }
}

export const createDrinkType = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkType = state.drinkType
    let {name, type, description, height, diameter, volume} = drinkType
    let newData = {name, type, description, height, diameter, volume}

    let response = await api.createDrinkType(newData)

    dispatch(push('/drink-type'))
  }
}

export const updateDrinkType = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkType = state.drinkType
    let {id, _rev, name, type, description, height, diameter, volume} = drinkType
    let newData = {id, _rev, name, type, description, height, diameter, volume}

    let response = await api.updateDrinkType(newData)

    dispatch(push('/drink-type'))
  }
}

export const deleteDrinkType = (id) => {
  return (dispatch, getState) => {
    let state = getState()
    let data = [...state.drinkType.data]

    data = data.filter(item => item.id !== id)

    api.deleteDrinkType(id)

    dispatch(updateDrinkTypeData({
      data
    }))
  }
}

export const fetchDrinkTypeItem = (id) => {
  return async (dispatch) => {
    let response = await api.fetchDrinkTypeItem(id)

    dispatch(updateDrinkTypeData(response.data))
  }
}
