import _ from 'lodash'

const initialState = {
  values:{
    from: {},
    to: {},
    quotedCode: {}
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
            ...state.from,
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
            ...state.to,
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
            ...state.quotedCode,
            [action.name]: action.value
          }
        }
      }
      return newState
    default:
      return state
  }
}

export default generateForm
