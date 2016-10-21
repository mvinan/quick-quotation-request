import {combineReducers} from 'redux'
import itemFields from './itemReducer'
import calculatePrice from './calculatePriceReducer.js'
import generateForm from './generateFormReducer.js'

const allReducers = combineReducers({
  itemFields,
  calculatePrice,
  generateForm
})

export default allReducers
