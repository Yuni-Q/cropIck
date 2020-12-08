import React from 'react';
import styled from 'styled-components';
import { Box } from './IncomeAnalysis';

const MainProductionArea: React.FC<any> = () => {

  return (
    <Wrapper>
      <img src="/static/invalid-name.svg" alt="map" width="30%" />
      <BoxWrapper>
        <Box>
          <div>강원도</div>
          <div>11,963,668</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
          <div>경상북도</div>
          <div>13,560,973</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
          <div>경상남도</div>
          <div>232,232</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
          <div>충청북도</div>
          <div>11,963,668</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
          <div>대구</div>
          <div>13,560,973</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
          <div>부산</div>
          <div>11,345,955</div>
          <div>단위 : kg</div>
        </Box>
      </BoxWrapper>
    </Wrapper>
  )
}

export default MainProductionArea;

const Wrapper = styled.div`
  margin: 80px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BoxWrapper = styled.div`
  width: 864px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;