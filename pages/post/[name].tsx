import Axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { StyledWrapper } from '..';
import GNB from '../../components/GNB';
import { PageContext } from '../_app';

const Community: React.FC<any> = ({ crop }) => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState('');

  return (
    <StyledWrapper>
      <GNB />
      <Title>{crop} 커뮤니티 글쓰기</Title>
      <TitleInput value={title} onChange={(e) => setTitle(e.target.value)} />
      <ContentInput value={content} onChange={(e) => setContent(e.target.value)} />
      <ButtonWrapper>
        <FileLabel><a href={file} target="_blank" rel="noreferrer">{file}</a></FileLabel>
        <ImgLabel htmlFor="file">파일 첨부</ImgLabel> 
        <SubmitButton onClick={async() => {
          try {
            await Axios.post(`https://umzzar.com/api/v1/posts`, {
              boardName: crop,
              title,
              auth: `${crop}빌런`,
              content,
              password: "1234",
              image: file,        
            });
            router.push(`/community?crop=${crop}`);
          } catch(error) {
            console.log(error);
          }
        }} >새 글 작성</SubmitButton>
      </ButtonWrapper>
      <input type="file" name="" id="file" style={{visibility: 'hidden'}} onChange={async(event) => {
        const formData = new FormData();
        if(event.target.files?.[0]) {
          try {
            formData.append('image', event.target.files[0]);
            const result = await Axios.post(`https://umzzar.com/api/v1/images`, formData, {
              headers: { 'Content-Type': 'multipart/form-data' },
            });
            console.log(result);
            setFile(result.data.result);
          } catch(error) {
            console.log(error);
          }
          
        }
      }}/>
    </StyledWrapper>
  )
}

interface ServerSideProps {
  props: {
    crop: string;
  }
}

export const getServerSideProps = async ({ params }: PageContext): Promise<ServerSideProps | void> => {
  return {
    props: {
      crop: decodeURI(params.name || ''),
    }
  }
};

export default Community;

export const SearchWrapper = styled.div`
  display: flex;
  margin: 35px 0;
`;

const Title = styled.div`
  font-family: NotoSansKR;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.53;
  color: #111111;
`;

const TitleInput = styled.input`
  width: 100%;
  height: 42px;
  margin: 47px 0 0;
  padding: 11px 0 11px 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
  border: solid 1px #d2d5d1;
  background-color: #ffffff;
`;
const ContentInput = styled.textarea`
  margin: 30px 0 0;
  width: 100%;
  padding: 11px 0 428px 12px;
  border-radius: 3px;
  box-shadow: 1px 1px 3px 0 rgba(32, 72, 20, 0.1);
  border: solid 1px #d2d5d1;
  background-color: #ffffff;
  resize: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 0 0;
`;

const ImgLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11px 14px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 0 rgba(17, 17, 17, 0.2);
  border: solid 1px #d2d5d1;
  background-color: #f5f5f5;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #2c2c2c;
  margin: 0 0 0 20px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 42px;
  padding: 11px 14px;
  border-radius: 3px;
  box-shadow: 1px 1px 4px 0 rgba(17, 17, 17, 0.2);
  background-color: #3da11e;
  font-family: NotoSansKR;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
  margin: 0 0 0 20px;
`;

const FileLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 42px;
`;