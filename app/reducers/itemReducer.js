const initialState = {
  currentRows: 1
}

const itemFields = (state=initialState, action) => {
  let newState
  switch (action.type){
    case 'ADD_ITEM':
      newState = {
        ...state,
        currentRows: state.currentRows + 1
      }
      return newState

    case 'REMOVE_ITEM':
      newState = {
        ...state,
        currentRows: state.currentRows - 1
      }
      return newState

    default:
      return state
  }
}

export default itemFields
