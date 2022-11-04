import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

const LoadingContainer = styled(View)`
  margin-top: 30px;
`;

export const Loading = ({color, size}) => {
  const theme = useTheme();
  return (
    <LoadingContainer>
      <ActivityIndicator color={color || theme.white} size={size} />
    </LoadingContainer>
  );
};
