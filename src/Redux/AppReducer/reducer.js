import * as types from "./actionTypes"

const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState,action) => {
  const {type,payload}=action
  switch (type){
    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading:true
      }
    case types.GET_SHOES_DATA_SUCCESS:
      return {
        ...state,
        isLoading:false,
        shoes:payload
      }
    case types.GET_SHOES_DATA_REQUEST:
      return {
        ...state,
        isLoading:false,
        shoes:[],
        isError:true
      }
    default:
      return state;
  }
 
};
