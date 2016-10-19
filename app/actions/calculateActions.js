import _ from 'lodash'

export const saveSubprice = (subPrice) => {
  return {
    type: 'SAVE_SUBPRICE',
    payload: subPrice
  }
}

export const subTotalPrice = (inputsPrice) => {
  return {
    type: 'SUB_TOTAL_PRICE',
    payload: inputsPrice
  }
}

export const totalPrice = (subtotal, iva=0.14) => {
  return {
    type: 'TOTAL_PRICE',
    payload: {
      subtotal,
      iva
    }
  }
}
