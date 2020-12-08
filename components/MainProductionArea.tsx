import React from 'react';
import styled from 'styled-components';
import { Box, Cycle } from './IncomeAnalysis';

const MainProductionArea: React.FC<any> = () => {

  return (
    <Wrapper>
      <img src="/static/invalid-name.svg" alt="map" width="30%" />
      <BoxWrapper>
        <Box>
          <Cycle color="#3da11e"><div style={{zIndex: 100}}>강원도</div></Cycle>
          <div>11,963,668</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
        <Cycle color="#3097e1"><div style={{zIndex: 100}}>경상북도</div></Cycle>
          <div>13,560,973</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
        <Cycle color="#f9aa22"><div style={{zIndex: 100}}>경상남도</div></Cycle>
          <div>232,232</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
        <Cycle color="#ff67e5"><div style={{zIndex: 100}}>충청북도</div></Cycle>
          <div>11,963,668</div>
          <div>단위 : kg</div>
        </Box>
        <Box>
        <Cycle color="#e14330"><div style={{zIndex: 100}}>대구</div></Cycle>
          <div>13,560,973</div>
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
`;

