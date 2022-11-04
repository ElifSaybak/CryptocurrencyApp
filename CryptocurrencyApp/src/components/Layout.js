import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.greyLighter};
`;

export const Layout = ({children, style}) => (
  <Container style={style}>{children}</Container>
);
