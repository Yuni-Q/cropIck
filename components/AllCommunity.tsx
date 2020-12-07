import React from 'react';
import styled from 'styled-components';
import { Title } from './PopularCommunity';

const AllCommunity: React.FC = () => {
  return (
    <PopularCommunityContentWrapper>
      <div>
        <Title>커뮤니티 전체 보기</Title>
        <SubTitle>
          인기순으로 300개 커뮤니티가 노출됩니다.<br />
          원하는 커뮤니티를 찾지 못하셨다면 검색으로 찾아보세요 :)
        </SubTitle>
      </div>
      {[1, 2, 3].map(no => {
        return (
          <Wrapper key={no}>
            <Category onClick={(e) => {
              if((e.target as any).parentElement.scrollHeight === (e.target as any).parentElement.clientHeight) {
                (e.target as any).parentElement.style.height = '42px';
              } else {
                (e.target as any).parentElement.style.height = `${(e.target as any).parentElement.scrollHeight}px`;
              }
            }}>
              야채류(303)
        </Category>
            <RankingWrapper>
              <RankingSection>
                {[1, 2, 3, 4, 5].map(no => {
                  return (
                    <RankSection key={no}>
                      <No>+</No>
                      <Content>과일</Content>
                    </RankSection>
                  )
                })}
              </RankingSection>
              <RankingSection>
                {[1, 2, 3, 4, 5].map(no => {
                  return (
                    <RankSection key={no}>
                      <No>+</No>
                      <Content>과일</Content>
                    </RankSection>
                  )
                })}
              </RankingSection>
              <RankingSection>
                {[1, 2, 3, 4, 5].map(no => {
                  return (
                    <RankSection key={no}>
                      <No>+</No>
                      <Content>과일</Content>
                    </RankSection>
                  )
                })}
              </RankingSection>
              <RankingSection>
                {[1, 2, 3, 4, 5].map(no => {
                  return (
                    <RankSection key={no}>
                      <No>+</No>
                      <Content>과일</Content>
                    </RankSection>
                  )
                })}
              </RankingSection>
              <RankingSection>
                {[1, 2, 3, 4, 5].map(no => {
                  return (
                    <RankSection key={no}>
                      <No>+</No>
                      <Content>과일</Content>
                    </RankSection>
                  )
                })}
              </RankingSection>
            </RankingWrapper>
          </Wrapper>
        )
      })}

      <NavWrapper>
        {[1, 2, 3, 4, 5].map(no => {
          return (
            <NavNo current={false} key={no}>{no}</NavNo>
          )
        })}
      </NavWrapper>
    </PopularCommunityContentWrapper>

  )
}

export default AllCommunity;

const PopularCommunityContentWrapper = styled.section`
	max-width: 1440px;
  margin: 30px 0 0 0;
`;

const SubTitle = styled.div`
  width: 289px;
  height: 36px;
  font-family: NotoSansKR;
  font-size: 12px;
  color: #676a66;
`;

const Category = styled.button`

  width: 1440px;
  height: 42px;
  background-color: #f5f5f5;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #2c2c2c;
  display: flex;
  align-items: center;
`;
const RankSection = styled.div`
   width: 287.5px;
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
  margin: 0 0 2px 8px;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #111111;
`;

const RankingWrapper = styled.div`
  display: flex;
`

const RankingSection = styled.div`

`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 30px 0 0;
`;

export const NavNo = styled.div<{current: boolean}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 10px;
  padding: 4px 11px;
  border-radius: 1px;
  background-color: ${(({current}) => current ? '#3da11e' : '#ffffff')};
  color: ${(({current}) => current ? '#fff' : '#000')};
`;

const Wrapper = styled.div`
  overflow: hidden;
  transition: all 0.3s ease-out;
`;