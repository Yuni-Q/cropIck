import React, { useState } from 'react';
import styled from 'styled-components';
import { SectionWrapper, StyledFirstSection, StyledSecondSection, StyledWrapper } from '.';
import AllCommunity from '../components/AllCommunity';
import Footer from '../components/Footer';
import GNB from '../components/GNB';
import { StyledButton, StyledCategoryWrapper } from '../components/MainSearch';
import PopularCommunityContent from '../components/PopularCommunityContent';
import Rank from '../components/Rank';
import { PageContext } from './_app';

const Community: React.FC = () => {
  const [content] = useState([1, 2, 3]);
  const [crop, setCrop] = useState('');

  return (
    <StyledWrapper>
      <GNB />
      <SearchWrapper>
      <StyledCategoryWrapper>
        <input placeholder="작물명 ex) 딸기" type="text" value={crop} onChange={(e)=> setCrop(e.target.value)} />
      </StyledCategoryWrapper>
      <StyledButton className="mt-0 ml-8 mb-0" style={{width: 125}}><a>검색</a></StyledButton>
      </SearchWrapper>
      <SectionWrapper>
        <StyledFirstSection>
          <PopularCommunityContent content={content} />
        </StyledFirstSection>
        <StyledSecondSection>
          <Rank />
        </StyledSecondSection>
      </SectionWrapper>
      <AllCommunity />
      <Footer />
    </StyledWrapper>
  )
}

interface ServerSideProps {
	props: {
		crop: string;
	}
}

export const getServerSideProps = async ({ pathname, query}: PageContext): Promise<ServerSideProps | void> => {
  console.log(33,pathname)
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

const SearchWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;