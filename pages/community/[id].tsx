import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { StyledWrapper } from '..';
import CommunityList from '../../components/CommunityList';
import Footer from '../../components/Footer';
import GNB from '../../components/GNB';
import { PageContext } from '../_app';

const Community: React.FC<any> = ({ id, crop, initPostArray, totalPage, post }) => {
  const [range, setRange] = useState('30');
  const [page, setPage] = useState(1);
  const [postArray, setPostArray] = useState(initPostArray);
  const [like, setLike] = useState(post.liked)

  useEffect(() => {
    const get = async () => {
      try {
        const result = await Axios.get(`https://umzzar.com/api/v1/posts?name=${encodeURI(crop)}&page=${page}&range=${range}`)
        setPostArray(result.data.result.posts || []);
      } catch (error) {
        console.log(error);
      }
    }
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
    get();
  }, [range])

  return (
    <StyledWrapper>
      <GNB />
      <MainTitle>{crop} 커뮤니티</MainTitle>
      <Title>{post.title}</Title>
      <Detail>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: 10, borderRight: '2px solid #d2d5d1' }}>
            {post.author}
          </div>
          <div style={{ paddingLeft: 10 }}>
            {post.created}
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingRight: 10, borderRight: '2px solid #d2d5d1' }}>
            좋아요 {like}
          </div>
          <div style={{ paddingLeft: 10 }}>
            댓글 {(post.Comment || []).length}
          </div>
        </div>
      </Detail>
      <Content>{post.content}</Content>
      {post.image && <div>
        <img src={post.image} />
      </div>}
      <LikeButton onClick={async () => {
        await Axios.put(`https://umzzar.com/api/v1/posts/${id}/liked`);
        setLike((like: number) => like + 1)
      }}>좋아요</LikeButton>
      <CommentWrapper>
        <CommentTitle>
          전체 댓글({(post.Comment || []).length})
        </CommentTitle>
        <table width="100%">
          <colgroup>
            <col width="25%" />
            <col width="50%" />
            <col width="25%" />
          </colgroup>
          {[1, 2, 3, 4, 5].map(no => {
            return (
              <tr key={no}>
                <td style={{ color: '#898c88' }}>{no}</td>
                <td>내용이 들어갑니다.</td>
                <td style={{ color: '#898c88' }}>{post.created}</td>
              </tr>
            )
          })}
        </table>
      </CommentWrapper>
      {postArray.length > 0 && <CommunityList crop={crop} postArray={postArray} range={range} setRange={setRange} page={page} setPage={setPage} totalPage={totalPage} />}
      <Footer />
    </StyledWrapper>
  )
}

interface ServerSideProps {
  props: {
    id: string;
    crop: string;
    initPostArray: any;
    totalPage: number;
    post: any;
  }
}

export const getServerSideProps = async ({ params }: PageContext): Promise<ServerSideProps | void> => {
  const id = params.id || '';
  try {
    const postResult = await Promise.all([
      Axios.get(`https://umzzar.com/api/v1/posts/${id}`),
    ])

    const result = await Promise.all([
      Axios.get(`https://umzzar.com/api/v1/posts?name=${encodeURI(postResult[0].data.result.boardName)}&page=1&range=30`),
    ])

    return {
      props: {
        id,
        crop: postResult[0].data.result.boardName,
        initPostArray: result[0].data.result.posts || [],
        totalPage: result[0].data.result.totalPage,
        post: postResult[0].data.result,
      }
    }
  } catch (error) {
    console.log(error);
    return {
      props: {
        id: '',
        crop: '',
        initPostArray: [],
        totalPage: 0,
        post: {}
      }
    }
  }
};

export default Community;

export const SearchWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

const MainTitle = styled.div`
  margin: 20px 0 0;
  font-family: AppleSDGothicNeo;
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  color: #3da11e;
`;

const Title = styled.div`
  margin: 31px 0 0;
  font-family: NotoSansKR;
  font-size: 16px;
  color: #111111;
`;

const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: NotoSansKR;
  font-size: 14px;
  text-align: center;
  color: #2c2c2c;
`;

const Content = styled.pre`
  margin: 20px 0 0;
  width: 100%;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #2c2c2c;
`;

const LikeButton = styled.button`
  margin: 80px 0 40px;
  width: 240px;
  height: 42px;
  padding: 11px 30px 11px 27px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 0 rgba(17, 17, 17, 0.2);
  border: solid 1px #d2d5d1;
  background-color: #f5f5f5;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #2c2c2c;
`
const CommentWrapper = styled.div`
  border-top: 1px solid #e5e7e5;
  border-bottom: 1px solid #e5e7e5;
  padding: 30px 0 80px;
`;

const CommentTitle = styled.div`
  font-family: NotoSansKR;
  font-size: 16px;
  color: #111111;
`;