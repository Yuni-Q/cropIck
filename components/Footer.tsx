import React from 'react';
import styled from 'styled-components';

const Footer:React.FC = () => {
  return (
    <FooterWrapper>
      <Title>크롭픽</Title>
      <Content>주소지 : 서울시 강남구 </Content>
      <Content>전화번호 : 000-0000-0000</Content>
      <Content>전화번호 : 000-0000-0000</Content>
    </FooterWrapper>
  )
}


export default Footer;

const FooterWrapper = styled.section`
	max-width: 1440px;
  margin: 30px 0 0 0;
  padding: 0 0 51px 0;
`;

const Title = styled.div`
  width: 45px;
  height: 24px;
  margin: 0 0 16px 0;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #676a66;
`;

const Content = styled.div`
  margin: 0 0 16px 0;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #676a66;
`;