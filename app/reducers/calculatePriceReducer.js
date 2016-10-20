import _ from 'lodash'

const initialSate = {
  totalPrice: 0,
  subTotalPrice: 0,
  hasDiscount: false,
  discount: 0,
  subTotalPriceWithDiscount: 0
}

const calculatePrice = (state=initialSate, action) => {
  let newState
  switch (action.type){
    case 'CALC_SUB_TOTAL_PRICE':
      let sumSubPrices, sumRoundedSubPrices

      sumSubPrices = action.payload
      sumRoundedSubPrices = Number(sumSubPrices+'').toFixed(parseInt(2))
      newState = {
        ...state,
        subTotalPrice: sumRoundedSubPrices
      }
      return newState
    case 'CALC_TOTAL_PRICE':
      let totalPrice, subTotalNumber, total

      subTotalNumber = Number(action.payload.price)
      totalPrice = (subTotalNumber * action.payload.iva) + subTotalNumber

      total = Number(totalPrice+'').toFixed(parseInt(2))
      newState = {
        ...state,
        totalPrice: total
      }
      return newState
    case 'ADD_DISCOUNT':
      newState = {
        ...state,
        hasDiscount: true
      }
      return newState
    case 'DISCOUNT_VALUE':
      newState = {
        ...state,
        discount: action.payload
      }
      return newState
    default:
      return state
  }
}

export default calculatePrice
