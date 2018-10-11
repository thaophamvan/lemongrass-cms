import { combineReducers } from 'redux'
import drinkType from './drinkType'
import drinkTemperature from './drinkTemperature'

export default combineReducers({
  drinkType,
  drinkTemperature
})
