
const initialState = {
  list: [],
  activedId: null
}
const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NEW_HOBBY': {
      const newListHobby = [...state.list];
      newListHobby.push(action.payload);
      return{
        ...state,
        list : newListHobby
      }
    }
    case 'SET_ACTIVE_HOBBY': {
      return state;
    }
    default:
      return state
  }
}

export default hobbyReducer;