import {View, FlatList, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getCryptocurrency} from '../redux/actions';

export const Cryptocurrencys = () => {
  const {cryptocurrency} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCryptocurrency());
    console.log('Data: \n\n', cryptocurrency.data);
  }, []);

  return (
    <View style={{alignItems: 'center'}}>
      <Text>Cryptocurrencys App</Text>
      <FlatList
        data={cryptocurrency.data}
        renderItem={({item}) => (
          <View>
            <Text>{item.name}</Text>
            {/* <Text>{item.symbol}</Text> */}
          </View>
        )}
      />
    </View>
  );
};
