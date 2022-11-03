import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useTheme} from 'styled-components';

import {Cryptocurrencys} from '../features/Cryptocurrencys';
import {CryptocurrencyDetails} from '../features/CryptocurrencyDetails';
import {Icon} from 'react-native-elements';

const Stack = createNativeStackNavigator();

export const Protected = () => {
  const navigation = useNavigation();
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
