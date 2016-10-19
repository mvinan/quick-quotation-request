const initialState = {
  currentRows: 0,
  services: []
}

const itemFields = (state=initialState, action) => {
  let newState, filteredServices
  switch (action.type){
    case 'ADD_ITEM':
      newState = {
        ...state,
        currentRows: state.currentRows + 1,
        services:  state.services.concat(action.payload)
      }
      return newState

    case 'REMOVE_ITEM':
      filteredServices =  state.services.filter( val => val.key != action.payload );
      newState = {
        ...state,
        currentRows: state.currentRows - 1,
        services: filteredServices
      }
      return newState

    default:
      return state
  }
}

export default itemFields
