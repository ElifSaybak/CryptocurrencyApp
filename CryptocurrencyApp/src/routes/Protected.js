import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import {Cryptocurrencys, CryptocurrencyDetails} from '../features/index';

const Stack = createNativeStackNavigator();

export const Protected = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator
      initialRouteName="Cryptocurrencys"
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 'bold',
        },
        headerTintColor: theme.blueMain,
        headerStyle: {
          backgroundColor: theme.blueLight,
        },
      }}>
      <Stack.Screen
        name="Cryptocurrencys"
        component={Cryptocurrencys}
        options={{
          title: 'Cryptocurrency List',
        }}
      />
      <Stack.Screen
        name="CryptocurrencyDetails"
        component={CryptocurrencyDetails}
        options={{
          title: 'Cryptocurrency Details',
        }}
      />
    </Stack.Navigator>
  );
};
