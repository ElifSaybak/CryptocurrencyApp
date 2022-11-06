import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const ErrorView = styled(View)`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.white};
  border-color: ${props => props.theme.blueMain};
  border-width: 2px;
  border-radius: 20px;
  padding: 15px;
  width: 350px;
  height: 150px;
`;

const ErrorText = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: ${props => props.theme.greyDarker};
`;

export const Error = ({message}) => {
  return (
    <ErrorView>
      <ErrorText>{message}</ErrorText>
    </ErrorView>
  );
};
