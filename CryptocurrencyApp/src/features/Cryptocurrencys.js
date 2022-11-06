import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useTheme} from 'styled-components';
import {StyleSheet, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {getCryptocurrencys} from '../redux/actions';
import {Titles, List, Loading, Layout, Error} from '../components/index';

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
      <View style={styles(theme).searchView}>
        <Icon
          name="search"
          size={28}
          color={theme.blueMain}
          style={styles(theme).searchIcon}
        />
        <TextInput
          value={search}
          placeholder="Search here.."
          placeholderTextColor={theme.greyDarker}
          onChangeText={text => searchFilter(text)}
          underlineColorAndroid="transparent"
          style={styles(theme).searchInput}
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

const styles = theme =>
  StyleSheet.create({
    searchView: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 30,
      height: 50,
      width: 350,
      borderWidth: 1,
      backgroundColor: theme.white,
      borderColor: theme.blueMain,
    },
    searchIcon: {
      padding: 10,
    },
    searchInput: {
      flex: 1,
      paddingTop: 10,
      paddingBottom: 10,
      paddingLeft: 10,
      paddingRight: 0,
      backgroundColor: theme.white,
      color: theme.greyDarker,
      fontSize: 16,
      fontStyle: 'italic',
      fontWeight: 'bold',
    },
  });
