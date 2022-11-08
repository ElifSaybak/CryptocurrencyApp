import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

const Container = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.greenLighter}
  margin-bottom: 5px;
  border-radius: 15px;
`;

const CryptocurrencyContainer = styled(View)`
  justify-content: center;
  height: 50px;
`;

const CryptocurrencyName = styled(Text)`
  color: ${props => props.theme.greenMain}
  font-size: 15px;
  font-weight: bold;
  padding-left: 15px;
`;

const CryptocurrencyPrice = styled(Text)`
  color: ${props => props.theme.orangeDarker}
  text-align: right;
  font-size: 15px;
  font-weight: bold;
  padding-right: 15px;
`;

const CryptocurrencyText = styled(Text)`
  color: ${props => props.theme.greyDarker};
  font-size: 12px;
`;

export const Item = ({id, name, symbol, price}) => {
  const navigation = useNavigation();

  const GetDetails = () => {
    navigation.navigate('CryptocurrencyDetails', {id});
  };

  return (
    <Container onPress={() => GetDetails()}>
      <CryptocurrencyContainer>
        <CryptocurrencyName>
          {name} - <CryptocurrencyText>{symbol}</CryptocurrencyText>
        </CryptocurrencyName>
      </CryptocurrencyContainer>
      <CryptocurrencyContainer>
        <CryptocurrencyPrice>
          {price.toFixed(2)} <CryptocurrencyText>USDT</CryptocurrencyText>
        </CryptocurrencyPrice>
      </CryptocurrencyContainer>
    </Container>
  );
};
