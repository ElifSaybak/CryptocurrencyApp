import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {getCryptocurrencys} from '../redux/actions';
import {List, Loading, Layout, Error} from '../components/index';
import {cryptoCurrencys} from '../assets/css/index';
import {UPDATE_PERIOD_TIME} from '../config/index';

export const Cryptocurrencys = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState('');
  const [timer, setTimer] = useState(false);

  const {cryptocurrencys} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  setTimeout(() => {
    setTimer(!timer);
  }, UPDATE_PERIOD_TIME);

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
  }, [timer]);

  useEffect(() => {
    setFilterData(cryptocurrencys.data);
    searchFilter();
  }, [cryptocurrencys.data]);

  const searchFilter = () => {
    if (search) {
      const newData = cryptocurrencys.data.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterData(newData);
    } else {
      setFilterData(cryptocurrencys.data);
      
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
      <View style={cryptoCurrencys(theme).searchView}>
        <Icon
          name="search"
          size={30}
          color={theme.orangeDarker}
          style={cryptoCurrencys(theme).searchIcon}
        />
        <TextInput
          value={search}
          placeholder="Search here.."
          placeholderTextColor={theme.greyDarker}
          onChangeText={
            text => {
              setSearch(text), searchFilter()}}
          underlineColorAndroid="transparent"
          style={cryptoCurrencys(theme).searchInput}
        />
      </View>
      {filterData == '' ? (
        <Error message="No found :(" />
      ) : (
        <List data={filterData} />
      )}
    </Layout>
  );
};
