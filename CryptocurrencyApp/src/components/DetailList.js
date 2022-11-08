import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const StyledScrollView = styled(ScrollView)`
  margin-vertical: 10px;
`;

const MainContainer = styled(View)`
  background-color: ${props => props.theme.white};
  width: 350px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Container = styled(View)`
  background-color: ${props => props.theme.greenLighter};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 100%;
  height: 50px;
  padding-horizontal: 15px;
  border-radius: 15px;
`;

const CryptocurrencyTitle = styled(Text)`
  color: ${props => props.theme.greenMain};
  font-size: 14px;
  font-weight: bold;
`;

const CryptocurrencyText = styled(Text)`
  color: ${props => props.theme.orangeDarker};
  font-size: 14px;
  font-weight: bold;
`;

export const DetailList = ({data}) => {
  return (
    <StyledScrollView>
      <MainContainer>
        <Container>
          <CryptocurrencyTitle>Price USD</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.price_usd.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Price BTC</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.price_btc.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Price ETH</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.price_eth.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Rank</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.marketcap.rank.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Volume last 24h</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.volume_last_24_hours.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Percent change USD last 24h</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.percent_change_usd_last_24_hours.toFixed(2)}%
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Percent change BTC last 24h</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.percent_change_btc_last_24_hours.toFixed(2)}%
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Percent change ETH last 24h</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.market_data.percent_change_eth_last_24_hours.toFixed(2)}%
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>All time high price</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.all_time_high.price.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Cycle low</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.cycle_low.price.toFixed(2)}
          </CryptocurrencyText>
        </Container>
        <Container>
          <CryptocurrencyTitle>Active user count</CryptocurrencyTitle>
          <CryptocurrencyText>
            {data.reddit.active_user_count}
          </CryptocurrencyText>
        </Container>
      </MainContainer>
    </StyledScrollView>
  );
};
