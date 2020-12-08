import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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

const Community: React.FC<any> = ({ crop, initPostArray, totalPage, rankArray, boardArray }) => {
  const router = useRouter();
  const [cropName, setCropName] = useState('');
  const [range, setRange] = useState('30');
  const [page, setPage] = useState(1);
  const [postArray, setPostArray] = useState(initPostArray);

  useEffect(() => {
    const get = async () => {
      try {
        const result = await Axios.get(`https://umzzar.com/api/v1/posts?name=${encodeURI(crop)}&page=${page}&range=${range}`)
        setPostArray(result.data.result.posts || []);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(page)
    get();
  }, [page])

  useEffect(() => {
    const get = async () => {
      try {
        const result = await Axios.get(`https://umzzar.com/api/v1/posts?name=${encodeURI(crop)}&page=1&range=${range}`)
        setPostArray(result.data.result.posts || []);
      } catch (error) {
        console.log(error);
      }
    }
    console.log(page)
    get();
  }, [range])

  return (
    <StyledWrapper>
      <GNB />
      {postArray.length > 0 && (
        <div>
          <SubTitle>Enjoy your community</SubTitle>
          <Title>
            {crop} 커뮤니티에 어서 오세요.<br />
            무슨 이야기라도<br />
            재미있고 유익하게-
          </Title>
        </div>
      )}
      {postArray.length === 0 && <SearchWrapper>
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
          <PopularCommunityContent boardArray={boardArray.slice(0, 3)} />
        </StyledFirstSection>
        <StyledSecondSection>
          <Rank rankArray={rankArray} />
        </StyledSecondSection>
      </SectionWrapper>
      {postArray.length > 0 && <CommunityList crop={crop} postArray={postArray} range={range} setRange={setRange} page={page} setPage={setPage} totalPage={totalPage} />}
      {postArray.length === 0 && <AllCommunity />}
      <Footer />
    </StyledWrapper>
  )
}

interface ServerSideProps {
  props: {
    crop: string;
    initPostArray: any;
    totalPage: number;
    rankArray: any;
    boardArray: any;
  }
}

export const getServerSideProps = async ({ query }: PageContext): Promise<ServerSideProps | void> => {
  let { crop = '' } = query;
  if (typeof crop === 'object') {
    crop = crop.join('');
  }
  try {
    const result = await Promise.all([
      Axios.get(`https://umzzar.com/api/v1/posts?name=${encodeURI(crop)}&page=1&range=30`),
      Axios.get(`https://umzzar.com/api/v1/ranking`),
      Axios.get(`https://umzzar.com/api/v1/boards`),
    ])
    result[1].data.result.sort((a: any, b: any) => {
      return b.count - a.count;
    })
    return {
      props: {
        crop,
        initPostArray: result[0].data.result.posts || [],
        totalPage: result[0].data.result.totalPage,
        rankArray: [...result[1].data.result, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        boardArray: result[2].data.result,
      }
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        crop,
        initPostArray: [],
        totalPage: 0,
        rankArray: [],
        boardArray: [],
      }
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