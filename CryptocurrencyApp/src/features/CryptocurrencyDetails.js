import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

const Layout = styled(View)`
  flex: 1;
  align-items: center;
`;

export const CryptocurrencyDetails = props => {
  const id = props.route.params.id;

  console.log('...........', id);

  return (
    <Layout>
      <Text style={{marginTop: 50}}>{id}</Text>
    </Layout>
  );
};
