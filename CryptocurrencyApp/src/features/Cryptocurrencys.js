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
    const fetchData = async () => {
      await dispatch(getCryptocurrencys());
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log('\nERROR getCryptocurrencys: ', error.message);
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
