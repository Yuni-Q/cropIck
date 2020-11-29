import React from 'react';
import styled from 'styled-components';

const GNB = () => {
  return (
    <StyledGNBWrapper>
      <StyledCropIckButton>CROP_ICK</StyledCropIckButton>
    </StyledGNBWrapper>
  )
}

export default GNB;

const StyledGNBWrapper = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
`;

const StyledCropIckButton = styled.button`
  width: 107px;
  height: 22px;
  margin: 0 135px 0 0;
  font-family: Gotham;
  font-size: 20px;
  font-weight: 900;
  text-align: center;
  color: #3da11e;
`;