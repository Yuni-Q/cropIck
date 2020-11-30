import React from 'react';
import styled from 'styled-components';
import { PopularCommunityWrapper, Title, TitleWrapper } from './PopularCommunity';

const Rank: React.FC = () => {
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>작물 검색</Title>
      </TitleWrapper>
      <RankingWrapper>

        <RankingSection>
          {[1, 2, 3, 4, 5].map(no => {
            return (
              <RankSection key={no}>
                <No>{no}</No>
                <Content>과일</Content>
              </RankSection>
            )
          })}
        </RankingSection>
        <RankingSection>
        {[6, 7, 8, 9, 10].map(no => {
            return (
            <RankSection key={no}>
              <No>{no}</No>
              <Content>과일</Content>
            </RankSection>
            )
        })}
        </RankingSection>
      
          
      </RankingWrapper>
    </PopularCommunityWrapper>

  )
}

export default Rank;

const RankingWrapper = styled.div`
  display: flex;
`

const RankingSection = styled.div`

`;

const RankSection = styled.div`
  width: 230px;
  height: 42px;
  margin: 0 14px 4px 0;
  padding: 9px 48px 9px 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
  background-color: #ffffff;
  display: flex;
  align-items: center;
`;

const No = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #3da11e;
`;

const Content = styled.div`
  margin: 0 0 2px 8px;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #111111;
`;