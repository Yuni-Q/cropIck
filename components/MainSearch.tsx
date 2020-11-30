import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Category } from '../pages';
import imgMain from '../static/images/img-main@2x.png';

const MainSearch: React.FC = () => {
  const [category, setCategory]  = useState(Category.PLACE)
  const [sido, setSido] = useState('');
  const [gugun, setGugun] = useState('');
  const [crop, setCrop] = useState('');
  return (
    <StyledWrapper>
      <div>
        <StyledSubTitle>
          Pick Your Crops!
        </StyledSubTitle>
        <StyledTitle>
          어떤 작물을 키우고 싶으신가요?<br />
          간단한 검색을 통해<br />
          나의 작물을 선택해보세요 :)
        </StyledTitle>
        <StyledSearchNavWrapper>
          <StyledNavButton inable={category===Category.PLACE} onClick={() => setCategory(Category.PLACE)}>장소로 검색</StyledNavButton>
          <StyledNavButton inable={category===Category.CROPS} onClick={() => setCategory(Category.CROPS)}>작물로 검색</StyledNavButton>
        </StyledSearchNavWrapper>
        <StyledCategoryWrapper>
        {category===Category.PLACE && <><select value={sido} onChange={(e) => setSido(e.target.value)}>
				  <option value="" disabled>시/도</option>
				  <option value="서울시">서울시</option>
				  <option value="대구시">대구시</option>
			  </select>
        <select value={gugun} onChange={(e) => setGugun(e.target.value)}>
				  <option value="" disabled>구</option>
				  <option value="북구">북구</option>
				  <option value="동구">동구</option>
			  </select></>}
        {category===Category.CROPS&& <>
        <input placeholder="작물명 ex) 딸기" type="text" value={crop} onChange={(e)=> setCrop(e.target.value)} />
        </>}
        </StyledCategoryWrapper>
        <div>
        <StyledButton><a>검색하기</a></StyledButton>
        </div>
      </div>
      
      <StyledImg src={imgMain} alt="imgMain"/>
    </StyledWrapper>
  )
}

export default MainSearch;

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 533px;
  height: 579px;
  margin: 0 0 0 270px;
  object-fit: contain;
`;

const StyledSubTitle = styled.div`
  width: 258px;
  height: 28px;
  margin: 65px 0 6px 0;
  font-family: Gotham;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: #898c88;
`;

const StyledTitle = styled.div`
  width: 500px;
  height: 174px;
  margin: 6px 0 60px 0;
  font-family: NotoSansKR;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.53;
  color: #111111;
`;

const StyledSearchNavWrapper = styled.div`
  display: flex;
  margin: 60px 0 2px 0;  
`;

const StyledNavButton = styled.button<{inable: boolean}>`
  ${({inable}) => {
    if(!!inable) {
      return css`
        position: relative;
        width: 108px;
        font-family: NotoSansKR;
        font-size: 20px;
        font-weight: bold;
        line-height: 1.8;
        color: #111111;
        &::after {
          content: "";
          display: inline-block;
          width: 90%;
          height: 2px;
          position: absolute;
          left: 8px;
          bottom: 12px;
          background: #3da11e;
        }
      `;
    }
    return css`
      width: 108px;
      font-family: NotoSansKR;
      font-size: 20px;
      line-height: 2.9;
      color: #898c88;  
    `
  }}
`;

const StyledButton = styled.button`
  width: 420px;
  height: 42px;
  margin: 30px 0 70px 0;
  padding: 11px 51px 11px 48px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 0 rgba(17, 17, 17, 0.2);
  background-color: #3da11e;
  a {
    width: 321px;
    height: 20px;
    font-family: NotoSansKR;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: #ffffff;
  }
`;

const StyledCategoryWrapper = styled.div`
  select {
    width: 200px;
    margin: 30px 20px 30px 0;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
    border: solid 1px #d2d5d1;
    background-color: #ffffff;
  }
  input {
    width: 420px;
    height: 42px;
    padding: 11px 81px 11px 12px;
    border-radius: 3px;
    box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
    border: solid 1px #d2d5d1;
    background-color: #ffffff;
    font-family: NotoSansKR;
    font-size: 14px;
  }

`;