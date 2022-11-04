import {API_URL} from '../config/index';

export const GET_CRYPTOCURRENCYS = 'GET_CRYPTOCURRENCYS';
export const GET_CRYPTOCURRENCY = 'GET_CRYPTOCURRENCY';

export const RESET_ACTION = {
  type: "RESET"
}

export const getCryptocurrency = id => {
  try {
    return async dispatch => {
      const result = await fetch(`${API_URL}/${id}/metrics`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_CRYPTOCURRENCY,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};

export const getCryptocurrencys = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();

      if (json) {
        dispatch({
          type: GET_CRYPTOCURRENCYS,
          payload: json,
        });
      } else {
        console.log('Unable to fetch!');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
