import { push } from 'connected-react-router'
import api from '../utilities/api'

// Constants
export const UPDATE_DRINK_TYPE_DATA = 'drink-type/UPDATE_DRINK_TYPE_DATA'
export const RESET_DRINK_TYPE_DATA  = 'drink-type/RESET_DRINK_TYPE_DATA'

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
    let {data, ...newData} = drinkType

    let response = await api.createDrinkType(newData)

    dispatch(push('/drink-type'))
  }
}

export const updateDrinkType = () => {
  return async (dispatch, getState) => {
    let state = getState()
    let drinkType = state.drinkType
    let {data, ...newData} = drinkType

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

// Action handlers
const ACTION_HANDLERS = {
  [UPDATE_DRINK_TYPE_DATA]: (state, action) => {
    return {
      ...state,
      ...action.payload
    }
  },
  [RESET_DRINK_TYPE_DATA]: () => initialState
}

// Reducer
const initialState = {
  data: [],
  id: '',
  _rev: '',
  name: '',
  type: '',
  description: '',
  height: '',
  diameter: '',
  volume: ''
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}