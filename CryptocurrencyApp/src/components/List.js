import React from 'react';
import {View, FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Item} from './index';

const MainContainer = styled(View)`
  background-color: ${props => props.theme.white};
  margin-vertical: 15px;
  width: 350px;
  flex-direction: row;
`;

const StyledScrollView = styled(ScrollView)`
  margin-bottom: 10px;
`;

export const List = ({data}) => {
  return (
    <StyledScrollView horizontal>
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
    </StyledScrollView>
  );
};
