import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

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
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

const IconContainer = styled(View)`
  background-color: ${props => props.theme.white};
  border-width:1px;
  border-color:${props => props.theme.blueMain}
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
`;

const StyledImage = styled(Image)`
  height: 40px;
  width: 40px;
`;

export const Title = ({data}) => {
  const theme = useTheme();

  return (
    <MainContainer>
      <Container>
        <TitleContainer>
          <TitleText>
            {data.name} - {data.symbol}
          </TitleText>
        </TitleContainer>
      </Container>
      <IconContainer>
        <StyledImage
          source={require('../assets/bootsplash_logo_original.png')}
        />
      </IconContainer>
    </MainContainer>
  );
};
