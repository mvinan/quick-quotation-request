import _ from 'lodash'

const initialState = {
  values:{
    from: {
      fromName: 'Miguelvinan.com',
      fromAddress: 'Machala y Guayaquil, Edif.Geminis',
      fromContact: '(+593) 9 8959 5742',
      fromEmail: 'admin@miguelvinan.com'
    },
    to: {
      toAddress: '',
      toDetails: '',
      toName: ''
    },
    quotedCode: {
      quotedClient: '',
      quotedCode: '',
      quotedDate: ''
    },
    servicesList: {},
    prices: {
      subtotal: 0,
      total: 0,
      discount: 0
    }
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
    case 'QUOTED_CODE_UPDATE_VALUES':
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
              price: action.service.price,
              id: action.service.serviceId
            }
          }
        }
      }
      return newState
    case 'PRICES_UPDATE_VALUES':
      newState = {
        ...state,
        values: {
          ...state.values,
          prices: {
            subtotal: action.subtotal,
            total: action.total,
            discount: action.discount
          }
        }
      }
      return newState
    default:
      return state
  }
}

export default generateForm
