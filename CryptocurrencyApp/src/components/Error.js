import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const ErrorView = styled(View)`
  margin-top: 30px;
  height: auto;
  align-items: center;
  background-color: ${props => props.theme.white};
  border-radius: 20px;
  padding: 15px;
`;

const ErrorTitle = styled(Text)`
  font-size: 20px;
  color: ${props => props.theme.black};
  margin-bottom: 20px;
`;

const ErrorText = styled(Text)`
  font-size: 16px;
  color: ${props => props.theme.error};
`;

export const Error = () => {
  return (
    <ErrorView>
      <ErrorTitle>Something went wrong!</ErrorTitle>
    </ErrorView>
  );
};
