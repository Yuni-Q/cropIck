import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { SearchWrapper } from '../pages/community';
import { LeftImg, RightImg } from '../pages/crop';
import { NavNo, NavWrapper } from './AllCommunity';
import { StyledButton, StyledCategoryWrapper } from './MainSearch';
import { Title, TitleWrapper } from './PopularCommunity';
import right from '../static/icon-chevron-right.svg'


const CommunityList: React.FC = () => {
  const router = useRouter();
  const [count, setCount] = useState('30')
  const [category, setCategory] = useState('all')
  const [cropName, setCropName] = useState('');
  const [page, setPage] = useState(5);

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
      <Table width="100%">
        <colgroup>
          <col width="10%" />
          <col width="60%" />
          <col width="10%" />
          <col width="10%" />
          <col width="10%" />
        </colgroup>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>작성일</th>
          <th>좋아요</th>
        </tr>
        {[1, 2, 3, 4, 5].map(no => {
          return (
            <tr key={no}>
              <td>{no}</td>
              <td>내용이 들어갑니다.</td>
              <td>글쓴이</td>
              <td>작성일</td>
              <td>좋아요</td>
            </tr>
          )
        })}

      </Table>
      <CommunityNav>
        <SearchWrapper>
          {<StyledCategoryWrapper>
            <input placeholder="작물명 ex) 딸기" type="text" value={cropName} onChange={(e) => setCropName(e.target.value)} />
          </StyledCategoryWrapper>}
          <StyledButton className="mt-0 ml-8 mb-0" style={{ width: 125 }} onClick={() => {
            router.replace(`/community?crop=${cropName}`)
          }}>검색</StyledButton>
        </SearchWrapper>
        <NavWrapper>
          {page -1 >= 1 && <LeftImg src={right} alt="left" onClick={() => setPage(page => page -1)} />}
          {[page - 2, page - 1, page, page + 1, page + 2, page + 3, page + 4].map(no => {
            if (no < 1) {
              return;
            }
            if (page - 1 > 0 && page + 4 === no) {
              return;
            }
            if (page - 2 > 0 && page + 3 === no) {
              return;
            }
            return (
              <NavNo key={no} onClick={() => setPage(no)} current={page === no}>{no}</NavNo>
            )
          })}
          <RightImg src={right} alt="right" onClick={() => setPage(page => page +1)} />
        </NavWrapper>
      </CommunityNav>
    </PopularCommunityContentWrapper>
  )
}

export default CommunityList;

const PopularCommunityContentWrapper = styled.section`
	max-width: 1440px;
`;

const TitleButtonWrapper = styled.div`
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
const CategoryButton = styled.div<{ inable: boolean }>`
    ${({ inable }) => {
    if (inable) {
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

const CommunityNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Table = styled.table`
  width: 100%;
  margin: 24px 0 0;
  th {
    height: 42px;
    margin: 0 20px 0 0;
    padding: 9px 0 9px;
    background-color: #f5f5f5;
  }
  td {
    height: 42px;
    margin: 0 20px 0 0;
    padding: 11px 0 11px;
  }
`;
