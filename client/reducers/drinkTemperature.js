import {
  UPDATE_DRINK_TEMPERATURE_DATA,
  RESET_DRINK_TEMPERATURE_DATA
} from '../actions'

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
  desired_temperature: '',
  fields: [
    'name',
    'description',
    'desired_temperature'
  ],
  edit: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}