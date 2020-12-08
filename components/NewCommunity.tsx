import React from 'react';
import styled from 'styled-components';
import { PopularCommunityWrapper, Title, TitleWrapper } from './PopularCommunity';

const NewCommunity: React.FC = () => {
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>도움이 되는 사이트</Title>
      </TitleWrapper>
      <RankingWrapper>

        <RankingSection>
          {[{
            title: '통합 정보 사이트',
            content: '농촌진흥청 정보이용도우미',
          }, {
            title: '농업기술',
            content: '농사로',
          }, {
            title: '농업연구자료, 재배기술책',
            content: '농업 도서관',
          }, {
            title: '출하량, 가격 동향',
            content: '농산물 유통 정보',
          }, {
            title: '농업 교육 정보',
            content: '농촌교육포털',
          }].map((no) => {
            return (
              <RankSection key={no.title}>
                <Sub>{no.title}</Sub>
                <Content>
                  {no.content}
                </Content>
              </RankSection>
            )
          })}
        </RankingSection>
      </RankingWrapper>
    </PopularCommunityWrapper>

  )
}

export default NewCommunity;

const RankingWrapper = styled.div`
  display: flex;
`

const RankingSection = styled.div`

`;

export const RankSection = styled.div`
  width: 474px;
  margin: 0 0 4px 0;
  padding: 9px 10px 9px 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
  background-color: #ffffff;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;


export const Content = styled.div`
  width:100%;
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px 0 4px 0;
  height: 24px;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  color: #3da11e;
  ::after {
    display: inline-block;
    content: '';
    background: url('/static/icon-chevron-right.svg') center center no-repeat;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;


export const Sub = styled.div`
  height: 20px;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #676a66;
`;