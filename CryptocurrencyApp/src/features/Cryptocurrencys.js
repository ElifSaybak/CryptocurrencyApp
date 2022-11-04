import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';

import {getCryptocurrencys} from '../redux/actions';
import {Titles, List, Loading, Layout, Error} from '../components/index';

export const Cryptocurrencys = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {cryptocurrencys} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getCryptocurrencys());
      setLoading(false);
      // console.log('Data: \n\n', cryptocurrencys.data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <Loading color={theme.blueMain} size="large" />;
  }

  if (error) {
    return (
      <Layout>
        <Error message={error} />
      </Layout>
    );
  }

  return (
    <Layout>
      <Titles />
      <List data={cryptocurrencys.data} />
    </Layout>
  );
};
