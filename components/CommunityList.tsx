import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Title, TitleWrapper } from './PopularCommunity';

const CommunityList: React.FC = () => {
  const [count, setCount ] =useState('30')
  const [category, setCategory ] =useState('all')
  return (
    <PopularCommunityContentWrapper>
      <TitleWrapper>
        <Title>커뮤니티 글</Title>
        <TitleButtonWrapper>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
				  <option value="30">30</option>
				  <option value="60">60</option>
				  <option value="100">100</option>
			  </select>
        <button>새 글 작성</button>
        </TitleButtonWrapper>
      </TitleWrapper>
      <Category>
        <CategoryButton inable={category === 'all'} onClick={() => setCategory('all')} >전체글</CategoryButton>
        <CategoryButton inable={category === 'popular'} onClick={() => setCategory('popular')} >인기글</CategoryButton>
      </Category>
    </PopularCommunityContentWrapper>

  )
}

export default CommunityList;

const PopularCommunityContentWrapper = styled.section`
	max-width: 1440px;
`;

const TitleButtonWrapper =styled.div`
  display: flex;
  select {
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
    border: solid 1px #d2d5d1;
    background-color: #ffffff;
  }
  button {
    width: 120px;
    height: 48px;
    padding: 11px 14px;
    margin: 0 0 0 20px;
    border-radius: 3px;
    box-shadow: 1px 1px 4px 0 rgba(17, 17, 17, 0.2);
    background-color: #3da11e;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }
`;
const Category = styled.div`
  display: flex;
`;
const CategoryButton = styled.div<{inable: boolean}>`
    ${({inable}) => {
      if(inable) {
        return css`
          font-family: NotoSansKR;
          font-size: 14px;
          text-align: center;
          color: #2c2c2c;
          width: 67px;
          height: 36px;
          padding: 8px 14px;
          border: solid 1px #d2d5d1;
          background-color: #fcfdfc;
        `;
      }
      return css`
        font-family: NotoSansKR;
        font-size: 14px;
        color: #898c88;
        width: 67px;
        height: 36px;
        padding: 8px 14px;
        border: solid 1px #d2d5d1;
        background-color: #e5e7e5;
      `;
      
    }}
`;
