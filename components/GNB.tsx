import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const GNB: React.FC = () => {
  return (
    <StyledGNBWrapper>
      <StyledCropIckButton>CROP_ICK</StyledCropIckButton>
      <StyledNav>
        <Link href="/">검색</Link>
        <Link href="/">커뮤니티</Link>
      </StyledNav>
    </StyledGNBWrapper>
  )
}

export default GNB;

const StyledGNBWrapper = styled.div`
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

const StyledNav = styled.nav`
  margin: 0 0 0 135px;
  display: flex;
  align-items: center;
  a {
    width: 52px;
    height: 20px;
    margin: 0 0 2px 28px;
    font-family: NotoSansKR;
    font-size: 14px;
    text-align: center;
    color: #2c2c2c;
  }
`;
