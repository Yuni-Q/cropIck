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

const Community: React.FC<any> = ({ crop, initPostArray, totalPage, rankArray }) => {
  const router = useRouter();
  const [content] = useState([1, 2, 3]);
  const [cropName, setCropName] = useState('');
  const [range, setRange] = useState('30');
  const [page, setPage] = useState(1);
  const [postArray, setPostArray] = useState(initPostArray);

  useEffect(() => {
    const get = async () => {
      try {
        const result = await Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts?name=${encodeURI(crop)}&page=${page}&range=${range}`)
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
        const result = await Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts?name=${encodeURI(crop)}&page=1&range=${range}`)
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
            딸기 커뮤니티에 어서 오세요.<br />
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
          <PopularCommunityContent content={content} />
        </StyledFirstSection>
        <StyledSecondSection>
          <Rank rankArray={rankArray} />
        </StyledSecondSection>
      </SectionWrapper>
      {postArray.length > 0 && <CommunityList postArray={postArray} range={range} setRange={setRange} page={page} setPage={setPage} totalPage={totalPage} />}
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
    rankArray: any
  }
}

export const getServerSideProps = async ({ query }: PageContext): Promise<ServerSideProps | void> => {
  let { crop = '' } = query;
  if (typeof crop === 'object') {
    crop = crop.join('');
  }
  try {
    const postArray = await Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts?name=${encodeURI(crop)}&page=1&range=30`)
    const result = await Axios.get(`http://ec2-52-79-158-171.ap-northeast-2.compute.amazonaws.com:8080/api/v1/ranking`)
    result.data.result.sort((a: any, b: any) => {
      return b.count - a.count;
    })
    return {
      props: {
        crop,
        initPostArray: postArray.data.result.posts || [],
        totalPage: postArray.data.result.totalPage,
        rankArray: [...result.data.result, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
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