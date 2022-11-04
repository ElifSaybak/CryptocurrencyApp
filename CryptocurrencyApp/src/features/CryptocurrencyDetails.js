import React, {useEffect, useState} from 'react';
import {useTheme} from 'styled-components';
import {useSelector, useDispatch} from 'react-redux';

import {getCryptocurrency, RESET_CRYPTOCURRENCY} from '../redux/actions';
import {Loading, Layout, Title, DetailList, Error} from '../components/index';

export const CryptocurrencyDetails = props => {
  const id = props.route.params.id;
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const {cryptocurrency} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCryptocurrency(id));
      setLoading(false);
    };

    try {
      fetchData();
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log('\nERROR getCryptocurrency: ', error.message);
    }

    return () => dispatch(RESET_CRYPTOCURRENCY);
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
      {cryptocurrency.data && (
        <>
          <Title data={cryptocurrency.data} />
          <DetailList data={cryptocurrency.data} />
        </>
      )}
    </Layout>
  );
};
