import {GET_CRYPTOCURRENCY} from './actions';

const initialState = {
  cryptocurrency: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CRYPTOCURRENCY:
      return {...state, cryptocurrency: action.payload};

    default:
      return state;
  }
}

export default userReducer;
