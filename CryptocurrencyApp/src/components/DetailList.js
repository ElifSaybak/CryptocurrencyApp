import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import styled from 'styled-components/native';

const StyledScrollView = styled(ScrollView)`
  margin-vertical: 10px;
`;

const MainContainer = styled(View)`
  background-color: ${props => props.theme.blueMain};
  width: 350px;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  align-items: center;
`;

const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CryptocurrencyContainer = styled(View)`
  background-color: ${props => props.theme.white};
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 162px;
  margin: 2px;
`;

const CryptocurrencyText = styled(Text)`
  color: ${props => props.theme.blueMain};
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  padding: 5px;
`;

export const DetailList = ({data}) => {
  return (
    <StyledScrollView>
      <MainContainer>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Price USD</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.price_usd}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Price BTC</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.price_btc}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Price ETH</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.price_eth}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Rank</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>{data.marketcap.rank}</CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Volume last 24h</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.volume_last_24_hours}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Percent change USD last 24h</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.percent_change_usd_last_24_hours}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Percent change BTC last 24h</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.percent_change_btc_last_24_hours}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Percent change ETH last 24h</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.market_data.percent_change_eth_last_24_hours}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>All time high price</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>{data.all_time_high.price}</CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Cycle low</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>{data.cycle_low.price}</CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
        <Container>
          <CryptocurrencyContainer>
            <CryptocurrencyText>Active user count</CryptocurrencyText>
          </CryptocurrencyContainer>
          <CryptocurrencyContainer>
            <CryptocurrencyText>
              {data.reddit.active_user_count}
            </CryptocurrencyText>
          </CryptocurrencyContainer>
        </Container>
      </MainContainer>
    </StyledScrollView>
  );
};
