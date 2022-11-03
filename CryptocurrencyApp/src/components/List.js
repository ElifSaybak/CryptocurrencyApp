import React from 'react';
import {View, FlatList} from 'react-native';
import styled from 'styled-components/native';
import {Item} from './Item';

const MainContainer = styled(View)`
  background-color: ${props => props.theme.white};
  border-width: 2px;
  border-color: ${props => props.theme.blueMain};
  margin-top: 10px;
  width: 350px;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const List = ({data}) => {
  return (
    <MainContainer>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            symbol={item.symbol}
            price={item.metrics.market_data.price_usd}
          />
        )}
      />
    </MainContainer>
  );
};
