import React from 'react';
import styled from 'styled-components';
import { PopularCommunityWrapper, Title, TitleWrapper } from './PopularCommunity';

const NewCommunity: React.FC = () => {
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>신설 커뮤니티</Title>
      </TitleWrapper>
      <RankingWrapper>

        <RankingSection>
          {[1, 2, 3, 4, 5].map(no => {
            return (
              <RankSection key={no}>
                <No>+</No>
                <Content>
                  <div>
                    과일
                  </div>

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

const RankSection = styled.div`
   width: 474px;
  height: 42px;
  margin: 0 0 4px 0;
  padding: 9px 10px 9px 12px;
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
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 2px 8px;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #111111;
  ::after {
    display: inline-block;
    content: '';
    background: url('/static/icon-chevron-right.svg') center center no-repeat;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;
