import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'styled-components/native';

export const Protected = () => {
  const theme = useTheme();

  return (
    <>
      <View style={{alignItems: 'center'}}>
        <Text style={{color: theme.blueMain}}>Cryptocurrency App</Text>
      </View>
    </>
  );
};
