import {GET_CRYPTOCURRENCYS, GET_CRYPTOCURRENCY, RESET_CRYPTOCURRENCY} from './actions';

const initialState = {
  cryptocurrencys: [],
  cryptocurrency: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CRYPTOCURRENCY:
      return {...state, cryptocurrency: action.payload};
    case GET_CRYPTOCURRENCYS:
      return {...state, cryptocurrencys: action.payload};
    case RESET_CRYPTOCURRENCY:
      return {...state, cryptocurrency: []};
    default:
      return state;
  }
}
export default userReducer;
