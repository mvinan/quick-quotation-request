import _ from 'lodash'

const initialSate = {
  subPrices: [],
  totalPrice: 0,
  subTotalPrice: 0
}

const calculatePrice = (state=initialSate, action) => {
  let newState
  switch (action.type){
    case 'SAVE_SUBPRICE':
      newState = {
        ...state,
        subPrices: state.subPrices.concat( action.payload )
      }
      return newState
    case 'SUB_TOTAL_PRICE':
      let sumSubPrices = _.sum(action.payload.map( item => Number(item.value)))
      let sumRoundedSubPrices = new Number(sumSubPrices+'').toFixed(parseInt(2))
      newState = {
        ...state,
        subTotalPrice: sumRoundedSubPrices
      }
      return newState
    case 'TOTAL_PRICE':
      let subtotal = new Number(action.payload.subtotal)
      let totalPrice = subtotal * action.payload.iva + subtotal
      newState = {
        ...state,
        totalPrice
      }
      return newState
    default:
      return state
  }
}

export default calculatePrice
