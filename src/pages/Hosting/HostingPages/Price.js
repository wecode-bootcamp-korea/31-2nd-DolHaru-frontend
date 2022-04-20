import React, { useState } from 'react';
import styled from 'styled-components';

const Price = ({ newStayInfo }) => {
  const [price, setPrice] = useState(50);
  const minusTenDollar = () => {
    setPrice(price => price - 10);
  };
  const plusTenDollar = () => {
    setPrice(price => price + 10);
  };

  newStayInfo.price = price;
  return (
    <PageContainer>
      <Content>
        <CounterWrapper>
          <CounterBtn onClick={minusTenDollar} disabled={price === 0}>
            -
          </CounterBtn>
          <ShowPrice>$ {price}</ShowPrice>
          <CounterBtn onClick={plusTenDollar}>+</CounterBtn>
        </CounterWrapper>
        <PerNight>/박</PerNight>
        <PriceDescription>
          이와 비슷한 숙소의 요금은 보통 $45~$75 사이입니다
        </PriceDescription>
      </Content>
    </PageContainer>
  );
};

export default Price;

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
  text-align: center;
`;

const Content = styled.div`
  position: relative;
  top: 50%;
  width: 75%;
  margin: 0 auto;
  transform: translateY(-50%);
`;

const CounterWrapper = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')}
  width:80%;
  margin: 0 auto 20px;
`;

const CounterBtn = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.darkGrey};
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontMedium};

  &:hover {
    border: 1px solid black;
  }
`;

const ShowPrice = styled.div`
  width: 50%;
  padding: 30px;
  border: 1px solid ${({ theme }) => theme.darkGrey};
  border-radius: 5px;
  font-size: ${({ theme }) => theme.fontLarge};
`;

const PerNight = styled.div`
  margin-bottom: 45px;
`;

const PriceDescription = styled.div`
  width: 50%;
  margin: 0 auto;
  line-height: 1.3;
  font-size: ${({ theme }) => theme.fontSemiMedium};
`;
