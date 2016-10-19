import {combineReducers} from 'redux'
import itemFields from './itemReducer'
import calculatePrice from './calculatePriceReducer.js'

const allReducers = combineReducers({
  itemFields,
  calculatePrice
})

export default allReducers
