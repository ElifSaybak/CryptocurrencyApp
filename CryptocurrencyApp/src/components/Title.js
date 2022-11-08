import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {ModalAlarm} from './index';

const MainContainer = styled(View)`
  background-color: ${props => props.theme.orangeTransparant};
  margin-top: 30px;
  height: 60px;
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
`;

const Container = styled(View)`
  justify-content: center;
  align-items: center;
  width: 255px;
`;

const TitleText = styled(Text)`
  color: ${props => props.theme.greenMain};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const ModalContainer = styled(View)`
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 70px;
`;

export const Title = ({data}) => {
  return (
    <MainContainer>
      <Container>
        <TitleText>
          {data.name} - {data.symbol}
        </TitleText>
      </Container>
      <ModalContainer>
        <ModalAlarm
          name={data.name}
          price={data.market_data.price_usd.toFixed(2)}
        />
      </ModalContainer>
    </MainContainer>
  );
};
