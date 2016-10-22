import _ from 'lodash'

const initialState = {
  values:{
    from: {},
    to: {},
    quotedCode: {},
    servicesList: {}
  }
}

const generateForm = (state=initialState, action) => {
  let newState
  switch(action.type){
    case 'FROM_UPDATE_VALUES':
      newState = {
        ...state,
        values: {
          ...state.values,
          from: {
            ...state.values.from,
            [action.name]: action.value
          }
        }
      }
      return newState
    case 'TO_UPDATE_VALUES':
      newState = {
        ...state,
        values: {
          ...state.values,
          to: {
            ...state.values.to,
            [action.name]: action.value
          }
        }
      }
      return newState
    case 'QUOTED_CODES_UPDATE_VALUES':
      newState = {
        ...state,
        values: {
          ...state.values,
          quotedCode: {
            ...state.values.quotedCode,
            [action.name]: action.value
          }
        }
      }
      return newState
    case 'SERVICE_UPDATE_VALUES':
      newState = {
        ...state,
        values: {
          ...state.values,
          servicesList: {
            ...state.values.servicesList,
            [action.service.serviceId]: {
              ...state.values.servicesList[action.service.serviceId],
              service: action.service.service,
              description: action.service.description,
              price: action.service.price
            }
          }
        }
      }
      return newState
    default:
      return state
  }
}

export default generateForm
