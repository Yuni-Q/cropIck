import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const GNB: React.FC = () => {
  const router = useRouter();
  console.log(11, router)
  const {pathname} = router;
  return (
    <StyledGNBWrapper>
      <Link href="/">
      <StyledCropIckButton>CROP_ICK</StyledCropIckButton>
      </Link>
      <StyledNav>
        <Link href="/crop"><span style={{fontWeight: pathname === '/crop' ? 700 : 400}}>검색</span></Link>
        <Link href="/community"><span style={{marginLeft: 28, fontWeight: pathname === '/community' ? 700 : 400}}>커뮤니티</span></Link>
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
