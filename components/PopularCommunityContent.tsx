import React from 'react';
import styled from 'styled-components';
import { Title, TitleWrapper } from './PopularCommunity';

const PopularCommunityContent: React.FC<{content: number[]}> = ({content}) => {
  return (
    <PopularCommunityContentWrapper>
      <TitleWrapper>
        <Title>인기 커뮤니티 글</Title>
      </TitleWrapper>
      <RankingWrapper>
        <RankingSection>
          {content.map(no => {
            return (
              <RankSection key={no}>
                <No>사과 커뮤니티</No>
                {[1, 2, 3, 4, 5, 6].map(no => {
                  return (
                    <NewsContent key={no}>과일과일과일과일과일과일과일과일과일과일과일과일과일과일과일과일과일</NewsContent>
                  )
                })}
              </RankSection>
            )
          })}
        </RankingSection>
      </RankingWrapper>
    </PopularCommunityContentWrapper>

  )
}

export default PopularCommunityContent;

const PopularCommunityContentWrapper = styled.section`
	max-width: 1440px;
`;

const RankingWrapper = styled.div`
  display: flex;
`

const RankingSection = styled.div`
  margin: 0 30px 0 0;
  display: flex;
  flex-wrap: wrap;
`;

const RankSection = styled.div`
  width: 230px;
  margin: 0 14px 4px 0;
  padding: 9px 48px 9px 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
`;

const No = styled.div`
  margin: 0 0 6px 0;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #2c2c2c;
`;


const NewsContent = styled.div`
  margin: 12px 63px 12px 0;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #676a66;
  width: 220px;
	line-height: 1.43;
	height: 1.43em;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
	word-break: break-all;
`;