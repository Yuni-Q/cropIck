import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { Title, TitleWrapper } from './PopularCommunity';

const PopularCommunityContent: React.FC<any> = ({ boardArray }) => {
  return (
    <PopularCommunityContentWrapper>
      <TitleWrapper>
        <Title>인기 커뮤니티 글</Title>
      </TitleWrapper>
      <RankingWrapper>
        <RankingSection>
          {boardArray.map((board: any) => {
            return (
              <RankSection key={board}>
                <Link href={`/community?crop=${board.name}`}>
                  <No>
                    <div>
                      {board.name} 커뮤니티
                    </div>
                  </No>
                </Link>
                {board.post.map((no: any) => {
                  return (
                    <NewsContent key={no.id}>{no.title}</NewsContent>
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
	width: 1440px;
`;

export const RankingWrapper = styled.div`
  display: flex;
  max-width: 1440px;
`

export const RankingSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const RankSection = styled.div`
  width: 256px;
  margin: 4px 16px;
  padding: 8px 9px 8px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
`;

export const No = styled.div`
  padding: 10px 0;
  border-bottom: 1px solid #e5e7e5; ;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 6px 0;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #2c2c2c;
  ::after {
    display: inline-block;
    content: '';
    background: url('/static/icon-chevron-right.svg') center center no-repeat;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;


export const NewsContent = styled.div`
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