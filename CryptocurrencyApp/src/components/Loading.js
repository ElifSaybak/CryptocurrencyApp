import React from 'react';
import {ActivityIndicator} from 'react-native';

export const Loading = ({color, size}) => {
  return (
    <ActivityIndicator style={{marginTop: 20}} color={color} size={size} />
  );
};
