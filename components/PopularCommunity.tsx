import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const PopularCommunity:React.FC<any> = ({communityRankArray}) => {
  console.log(111, communityRankArray)
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>인기 작물 커뮤니티</Title>
        <Link href="/community">
        <More><div className="mt-1">더보기</div></More>
        </Link>
      </TitleWrapper>
      
      <CropsWrapper>
        {communityRankArray.map((communityRank: any) => {
          return (
            <Link key={communityRank.boardName} href='/community?crop=사용'>
            <CropWrapper>
              <CropImage src={communityRank.image} />
              <CropName>{communityRank.boardName}</CropName>
            </CropWrapper>
            </Link>
          )
        })}
      </CropsWrapper>
    </PopularCommunityWrapper>
  )
}

export default PopularCommunity;

export const PopularCommunityWrapper = styled.section`
  width: 859px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  width: 180px;
  height: 36px;
  margin: 30px 0 16px 0;
  font-family: NotoSansKR;
  font-size: 20px;
  font-weight: bold;
  line-height: 1.8;
  color: #111111;
`;

export const More = styled.div`
  display: flex;
  align-items: center;
  margin: 0 88px 0 0;
  font-family: NotoSansKR;
  font-size: 16px;
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

export const CropsWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
  height: 240px;
  overflow: hidden;
  align-items: flex-start;
`;


export const CropWrapper = styled.div`
	display: flex;
	flex-direction: column;
  justify-content: center;
`;


export const CropImage = styled.img`
  flex-shrink:0;
	width: 68px;
  height: 68px;
  margin: 16px 32px 2px 0;
  border: solid 2px #3da11e;
  border-radius: 50%;
`;

export const CropName = styled.div`
  flex-shrink:0;
  height: 24px;
  margin: 2px 32px 0 0;
  font-family: NotoSansKR;
  font-size: 16px;
  text-align: center;
  color: #111111;
`;