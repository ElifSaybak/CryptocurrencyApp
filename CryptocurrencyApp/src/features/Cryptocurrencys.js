import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {getCryptocurrencys} from '../redux/actions';
import {Titles, List, Loading, Layout, Error} from '../components/index';
import {cryptoCurrencys} from '../assets/css/index';

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
  }, 60000);

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
  }, [cryptocurrencys.data]);

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
      <View style={cryptoCurrencys(theme).searchView}>
        <Icon
          name="search"
          size={28}
          color={theme.blueMain}
          style={cryptoCurrencys(theme).searchIcon}
        />
        <TextInput
          value={search}
          placeholder="Search here.."
          placeholderTextColor={theme.greyDarker}
          onChangeText={text => searchFilter(text)}
          underlineColorAndroid="transparent"
          style={cryptoCurrencys(theme).searchInput}
        />
      </View>
      <Titles />
      {filterData == '' ? (
        <Error message="No found :(" />
      ) : (
        <List data={filterData} />
      )}
    </Layout>
  );
};
