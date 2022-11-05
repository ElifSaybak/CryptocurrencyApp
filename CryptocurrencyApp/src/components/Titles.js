import React from 'react';
import {View, Text} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

const Container = styled(View)`
  background-color: ${props => props.theme.blueMain};
  margin-top: 20px;
  height: 60px;
  width: 350px;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
  align-items: center;
`;

const TitleContainer = styled(View)`
  background-color: ${props => props.theme.white};
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 105px;
`;

const Title = styled(Text)`
  color: ${props => props.theme.blueMain};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const Titles = ({title}) => {
  const theme = useTheme();

  return (
    <Container>
      <TitleContainer>
        <Title>Name</Title>
      </TitleContainer>
      <TitleContainer>
        <Title>Symbol</Title>
      </TitleContainer>
      <TitleContainer>
        <Title>Price</Title>
      </TitleContainer>
    </Container>
  );
};
