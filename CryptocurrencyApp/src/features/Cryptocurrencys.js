import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

import {getCryptocurrencys} from '../redux/actions';
import {Titles, List, Loading, Layout, Error} from '../components/index';

const SearchInput = styled(TextInput)`
  background-color: ${props => props.theme.white};
  border-color: ${props => props.theme.blueMain};
  border-width: 1px;
  border-radius: 15px;
  padding-left: 20px;
  height: 50px;
  width: 350px;
  margin-top: 30px;
`;

export const Cryptocurrencys = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');

  const {cryptocurrencys} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCryptocurrencys());
      setFilterData(cryptocurrencys.data);
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

  const searchFilter = text => {
    if (text) {
      const newData = cryptocurrencys.data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
      setSearch(text);
    } else {
      setFilterData(cryptocurrencys.data);
      setSearch(text);
    }
  };

  if (loading) {
    return <Loading color={theme.blueMain} size="large" />;
  }

  if (error) {
    return (
      <Layout>
        <Error message="Something went wrong!" />
      </Layout>
    );
  }

  return (
    <Layout>
      <SearchInput
        value={search}
        placeholder="Search here.."
        onChangeText={text => searchFilter(text)}
      />
      <Titles />
      {filterData == '' ? (
        <Error message="No found :(" />
      ) : (
        <List data={filterData} />
      )}
    </Layout>
  );
};
