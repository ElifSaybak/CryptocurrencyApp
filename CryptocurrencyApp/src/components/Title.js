import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';
import {ModalAlarm} from './index';

const MainContainer = styled(View)`
  background-color: ${props => props.theme.greyLighter};
  margin-top: 30px;
  height: 70px;
  width: 350px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled(View)`
  background-color: ${props => props.theme.white};
  border-width:1px;
  border-color:${props => props.theme.blueMain}
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 255px;
`;

const TitleContainer = styled(View)`
  background-color: ${props => props.theme.blueMain};
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 235px;
`;

const TitleText = styled(Text)`
  color: ${props => props.theme.white};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

const ModalContainer = styled(View)`
  background-color: ${props => props.theme.blueMain};
  border-width:1px;
  border-color:${props => props.theme.blueMain}
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 70px;
`;

export const Title = ({data}) => {
  return (
    <MainContainer>
      <Container>
        <TitleContainer>
          <TitleText>
            {data.name} - {data.symbol}
          </TitleText>
        </TitleContainer>
      </Container>
      <ModalContainer>
        <ModalAlarm price={data.market_data.price_usd.toFixed(2)} />
      </ModalContainer>
    </MainContainer>
  );
};
