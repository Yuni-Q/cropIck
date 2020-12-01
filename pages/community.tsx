import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper, StyledFirstSection, StyledSecondSection, StyledWrapper } from '.';
import AllCommunity from '../components/AllCommunity';
import CommunityList from '../components/CommunityList';
import Footer from '../components/Footer';
import GNB from '../components/GNB';
import { StyledButton, StyledCategoryWrapper } from '../components/MainSearch';
import PopularCommunityContent from '../components/PopularCommunityContent';
import Rank from '../components/Rank';
import { PageContext } from './_app';

const Community: React.FC<{ crop: string }> = ({ crop }) => {
  const router = useRouter();
  const [content] = useState([1, 2, 3]);
  const [cropName, setCropName] = useState('');

  return (
    <StyledWrapper>
      <GNB />
      {crop && (
        <div>
          <SubTitle>Enjoy your community</SubTitle>
          <Title>
            딸기 커뮤니티에 어서 오세요.<br />
            무슨 이야기라도<br />
            재미있고 유익하게-
          </Title>
        </div>
      )}
      {!crop && <SearchWrapper>
        {<StyledCategoryWrapper>
          <input placeholder="작물명 ex) 딸기" type="text" value={cropName} onChange={(e) => setCropName(e.target.value)} />
        </StyledCategoryWrapper>}
        <StyledButton className="mt-0 ml-8 mb-0" style={{ width: 125 }} onClick={() => {
          router.replace(`/community?crop=${cropName}`)
        }}
        >검색</StyledButton>
      </SearchWrapper>}
      <SectionWrapper>
        <StyledFirstSection>
          <PopularCommunityContent content={content} />
        </StyledFirstSection>
        <StyledSecondSection>
          <Rank />
        </StyledSecondSection>
      </SectionWrapper>
      {crop && <CommunityList />}
      {!crop && <AllCommunity />}
      <Footer />
    </StyledWrapper>
  )
}

interface ServerSideProps {
  props: {
    crop: string;
  }
}

export const getServerSideProps = async ({ pathname, query }: PageContext): Promise<ServerSideProps | void> => {
  console.log(33, pathname)
  let { crop = '' } = query;
  if (typeof crop === 'object') {
    crop = crop.join('');
  }
  return {
    props: {
      crop,
    }
  }
};

export default Community;

export const SearchWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

const SubTitle = styled.div`
  margin: 35px 0 6px 0;
  font-family: Gotham;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: #898c88;

`;

const Title = styled.div`
  margin: 6px 0 0 0;
  font-family: NotoSansKR;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.53;
  letter-spacing: normal;
  color: #111111;
`;