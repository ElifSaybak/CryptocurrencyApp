import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCryptocurrency} from '../redux/actions';
import {Titles} from '../components/Titles';
import {List} from '../components/List';

import {Layout} from '../components/Layout';

export const Cryptocurrencys = () => {
  const {cryptocurrency} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrency());
    console.log('Data: \n\n', cryptocurrency.data);
  }, []);

  return (
    <Layout>
      <Titles />
      <List data={cryptocurrency.data} />
    </Layout>
  );
};
