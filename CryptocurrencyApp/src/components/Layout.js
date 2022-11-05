import React from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: ${props => props.theme.greyLighter};
`;

export const Layout = ({children, style}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={{flex: 1}}>
    <Container style={style}>{children}</Container>
  </KeyboardAvoidingView>
);
