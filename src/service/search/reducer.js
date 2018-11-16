import actionTypes from './actionType';

const initialState = {
  userList: [],
  updateList:[],
  walletList:[]
  
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionTypes.LIST_SUCCESS:
      return ({
        ...state,
        userList: action.data
      });

      case actionTypes.UPDATE_USER:
      return({
        ...state,
        updateList: action.data
      });
          
    default: 
      return state;
  }
}
export default reducer;