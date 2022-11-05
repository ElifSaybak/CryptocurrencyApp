import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CryptocurrencyContainer = styled(View)`
  background-color: ${props => props.theme.blueMain};
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 107px;
  margin-bottom: 10px;
`;

const CryptocurrencyText = styled(Text)`
  color: ${props => props.theme.white};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

export const Item = ({id, name, symbol, price}) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const GetDetails = () => {
    navigation.navigate('CryptocurrencyDetails', {id});
  };

  return (
    <Container onPress={() => GetDetails()}>
      <CryptocurrencyContainer>
        <CryptocurrencyText>{name}</CryptocurrencyText>
      </CryptocurrencyContainer>
      <CryptocurrencyContainer>
        <CryptocurrencyText>{symbol}</CryptocurrencyText>
      </CryptocurrencyContainer>
      <CryptocurrencyContainer>
        <CryptocurrencyText>{price.toFixed(2)}</CryptocurrencyText>
      </CryptocurrencyContainer>
    </Container>
  );
};
