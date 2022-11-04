import {GET_CRYPTOCURRENCYS, GET_CRYPTOCURRENCY} from './actions';

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

    default:
      return state;
  }
}
export default userReducer;
