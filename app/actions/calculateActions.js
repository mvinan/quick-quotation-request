import _ from 'lodash'

export const calcSubTotalPrice = (prices) => {
  return {
    type: 'CALC_SUB_TOTAL_PRICE',
    payload: prices
  }
}

export const calcTotalPrice = (price, iva=0.14) => {
  return {
    type: 'CALC_TOTAL_PRICE',
    payload: {
      price,
      iva
    }
  }
}
