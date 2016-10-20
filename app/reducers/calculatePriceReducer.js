import _ from 'lodash'

const initialSate = {
  totalPrice: 0,
  subTotalPrice: 0
}

const calculatePrice = (state=initialSate, action) => {
  let newState
  switch (action.type){
    case 'CALC_SUB_TOTAL_PRICE':
      let sumSubPrices = action.payload
      let sumRoundedSubPrices = Number(sumSubPrices+'').toFixed(parseInt(2))
      newState = {
        ...state,
        subTotalPrice: sumRoundedSubPrices
      }
      return newState
    case 'CALC_TOTAL_PRICE':
      let subtotal = action.payload.price
      let subTotalNumber = Number(subtotal)
      let totalPrice = (subTotalNumber * action.payload.iva) + subTotalNumber
      let total = Number(totalPrice+'').toFixed(parseInt(2))
      newState = {
        ...state,
        totalPrice: total
      }
      return newState
    default:
      return state
  }
}

export default calculatePrice
