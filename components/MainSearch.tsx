import React from 'react';
import styled from 'styled-components';
import imgMain from '../static/images/img-main@2x.png';

const MainSearch: React.FC = () => {
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
        <div>장소로 검색</div>
        <div>작물로 검색</div>
        </StyledSearchNavWrapper>
        <StyledCategoryWrapper>
        <select >
				  <option value="test1">시/도</option>
				  <option value="test2">서울시</option>
				  <option value="test3">대구시</option>
			  </select>
        <select >
				  <option value="test1">구</option>
				  <option value="test2">북구</option>
				  <option value="test3">동구</option>
			  </select>
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
  justify-content: space-between;
  align-items: center;
`;

const StyledImg = styled.img`
  width: 533px;
  height: 579px;
  margin: 0 0 0 407px;
  object-fit: contain;
`;

const StyledSubTitle = styled.div`
  width: 258px;
  height: 28px;
  margin: 65px 649px 6px 0;
  font-family: Gotham;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: #898c88;
`;

const StyledTitle = styled.div`
  width: 500px;
  height: 174px;
  margin: 6px 407px 60px 0;
  font-family: NotoSansKR;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.53;
  color: #111111;
`;

const StyledSearchNavWrapper = styled.div`
  display: flex;
  margin: 60px 671px 2px 20px;
  div {
    width: 108px;
    font-family: NotoSansKR;
    font-size: 20px;
    line-height: 2.9;
    color: #898c88;
  }
`;

const StyledButton = styled.button`
  width: 420px;
  height: 42px;
  margin: 30px 487px 70px 0;
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
`;