import React from 'react';
import styled from 'styled-components';

const PopularCommunity:React.FC = () => {
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>인기 작품 커뮤니티</Title>
        <More>더보기</More>
      </TitleWrapper>
      
      <CropsWrapper>
        {[1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14].map(no => {
          return (
            <CropWrapper key={no}>
              <CropImage src="data:image/jpeg;base64,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" />
              <CropName>사과</CropName>
            </CropWrapper>
          )
        })}
      </CropsWrapper>
    </PopularCommunityWrapper>
  )
}

export default PopularCommunity;

export const PopularCommunityWrapper = styled.section`
  max-width: 791px;
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
  margin: 0 88px 0 0;
  font-family: NotoSansKR;
  font-size: 16px;
  text-align: center;
  color: #111111;
`;

const CropsWrapper = styled.div`
	display: flex;
  flex-wrap: wrap;
`;


const CropWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;


const CropImage = styled.img`
	width: 68px;
  height: 68px;
  margin: 16px 37px 2px 0;
  border: solid 2px #3da11e;
  border-radius: 50%;
`;

const CropName = styled.div`
  height: 24px;
  margin: 2px 56px 0 19px;
  font-family: NotoSansKR;
  font-size: 16px;
  text-align: center;
  color: #111111;
`;