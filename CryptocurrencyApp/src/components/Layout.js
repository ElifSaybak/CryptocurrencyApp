import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import styled from 'styled-components/native';

const StyledContainerView = styled(View)`
  flex: 1;
  background-color: ${props => props.theme.greyLighter};
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const StyledScrollView = styled(ScrollView)`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.greyLighter};
`;

const StyledView = styled(View)`
  justify-content: center;
  height: 100%;
`;

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});

export const Layout = ({children, style}) => (
  <StyledContainerView>
    <StyledScrollView contentContainerStyle={styles.contentContainer}>
      <StyledView style={style}>{children}</StyledView>
    </StyledScrollView>
  </StyledContainerView>
);
