import {
  UPDATE_DRINK_TYPE_DATA,
  RESET_DRINK_TYPE_DATA
} from '../actions'

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