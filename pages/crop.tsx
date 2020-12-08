import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Category, StyledWrapper } from '.';
import Footer from '../components/Footer';
import GNB from '../components/GNB';
import IncomeAnalysis from '../components/IncomeAnalysis';
import { StyledButton, StyledCategoryWrapper, StyledNavButton } from '../components/MainSearch';
import { CropImage } from '../components/PopularCommunity';
import { PageContext } from './_app';

interface Props {
  initCrop: string;
  initSido: string;
  initGugun: string
}

const Crop: React.FC<Props> = ({ initCrop, initSido, initGugun }) => {
  const router = useRouter();
  const [category, setCategory] = useState(initCrop ? Category.CROPS : Category.PLACE)
  const [buttonCategory, setButtonCategory] = useState('소득 분석');
  const [sido, setSido] = useState(initSido);
  const [gugun, setGugun] = useState(initGugun);
  const [crop, setCrop] = useState(initCrop);
  // const cropArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  // const [page, setPage] = useState(1);
  // const cropCurentArray = cropArray.slice(page > 1 ? ((page - 1) * 16) : page -1, page > 1 ? ((page) * 16 ) : 16 )

  // const expData = {
  //   labels: ["{initCrop}", "배", "귤"],
  //   datasets: [
  //     {
  //       data: [60, 13, 27],
  //       borderWidth: 2,
  //       hoverBorderWidth: 3,
  //       backgroundColor: [
  //         "rgba(238, 102, 121, 1)",
  //         "rgba(98, 181, 229, 1)",
  //         "rgba(255, 198, 0, 1)"
  //       ],
  //       fill: true
  //     }
  //   ]
  // };
  return (
    <StyledWrapper>
      <GNB />
      <CategoryWrapper>
        <StyledNavButton inable={category === Category.PLACE} onClick={() => setCategory(Category.PLACE)}>장소로 검색</StyledNavButton>
        <StyledNavButton inable={category === Category.CROPS} onClick={() => setCategory(Category.CROPS)}>작물로 검색</StyledNavButton>
      </CategoryWrapper>
      <StyledCategoryWrapper>
        {category === Category.PLACE && <><select value={sido} onChange={(e) => setSido(e.target.value)}>
          <option value="" disabled>시/도</option>
          <option value="서울시">서울시</option>
          <option value="대구시">대구시</option>
        </select>
          <select value={gugun} onChange={(e) => setGugun(e.target.value)}>
            <option value="" disabled>구</option>
            <option value="북구">북구</option>
            <option value="동구">동구</option>
          </select></>}
        {category === Category.CROPS && <>
          <input placeholder="작물명 ex) {initCrop}" type="text" value={crop} onChange={(e) => setCrop(e.target.value)} />
        </>}
        <StyledButton className="m-0 ml-7" onClick={() => {
          if (category === Category.CROPS) {
            router.replace(`/crop?crop=${crop}`)
            return;
          }
          router.replace(`/crop?sido=${sido}&gugun=${gugun}`)
        }}>검색하기</StyledButton>
      </StyledCategoryWrapper>
      <div>
        {/* <Title>경기도 부천시 현재 작물 현황입니다.</Title>
        <Main>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: 350, height: 300 }}>
              <Doughnut
                data={expData}
                width={300}
                height={300}
                options={{
                  responsive: false,
                  maintainAspectRatio: false,
                  legend: {
                    display: false
                  },
                }}
              />
            </div>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <CropsContainer>
                  <LeftImg src={right} alt="left" onClick={() => {
                    if (page - 1 < 1) {
                      setPage(Math.ceil(cropArray.length / 14))
                      return;
                    }
                    setPage(page => page - 1)
                  }} />
                  <CropsWrapper style={{ width: 1076 }}>
                    {cropCurentArray.map(no => {
                      return (
                        <Link key={no} href='/community?crop=사용'>
                          <CropWrapper>
                            <CropImage src="data:image/jpeg;base64,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" />
                      <CropName>{no}</CropName>
                          </CropWrapper>
                        </Link>
                      )
                    })}
                  </CropsWrapper>
                  <RightImg src={right} alt="left" onClick={() => {
                    if (page >= Math.ceil(cropArray.length / 14)) {
                      setPage(1)
                      return;
                    }
                    setPage(page => page + 1)
                  }} />
                </CropsContainer>
              </div>
              <Pagenation>{`${page} / ${Math.ceil(cropArray.length / 14)}`}</Pagenation>
            </div>
          </div>
        </Main> */}
        <Info>
          <InfoTitle>
            <div style={{ display: "flex" }}>
              <CropImage style={{ width: 150, height: 150 }} src="data:image/jpeg;base64,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" />
              <div>
                <InfoTitle1>과일류</InfoTitle1>
                <InfoTitle2>36.7 농가 사용중</InfoTitle2>
                <div style={{ display: "flex" }}>
                  <InfoTitle3>{initCrop}</InfoTitle3>
                  <InfoTitle4>단호박은 서양계 호박의 한 품종으로 당도가 높고 밤 맛이 난다 하여 밤호박이라고도 한다. 풍부한 당질과 영양분에 비해 열량은 낮고, 식이섬유가 풍부하여 소화를 돕는다.</InfoTitle4>
                </div>
              </div>
            </div>
            <Shortcuts>
              <Link href={`/community?crop=${initCrop}`}>
                <div>
                  {initCrop} 커뮤니티 바로가기
              </div>
              </Link>
            </Shortcuts>
          </InfoTitle>
          <div className="mt-10" style={{ display: 'flex' }}>
            <Button current={buttonCategory === '소득 분석'} onClick={() => setButtonCategory('소득 분석')}>소득 분석</Button>
            <Button current={buttonCategory === '생산량 및 소비 분석'} onClick={() => setButtonCategory('생산량 및 소비 분석')}>생산량 및 소비 분석</Button>
            <Button current={buttonCategory === '작물 동향'} onClick={() => setButtonCategory('작물 동향')}>작물 동향</Button>
            <Button current={buttonCategory === '주산지'} onClick={() => setButtonCategory('주산지')}>주산지</Button>          </div>
            {buttonCategory === '소득 분석' && <IncomeAnalysis />}
        </Info>
      </div>
      <Footer />
    </StyledWrapper>
  )
}

export default Crop;


interface ServerSideProps {
  props: {
    initCrop: string;
    initSido: string;
    initGugun: string
  }
}

export const getServerSideProps = async ({ query }: PageContext): Promise<ServerSideProps | void> => {
  let { crop = '', gugun = '', sido = '' } = query;
  if (typeof crop === 'object') {
    crop = crop.join('');
  }
  if (typeof gugun === 'object') {
    gugun = gugun.join('');
  }
  if (typeof sido === 'object') {
    sido = sido.join('');
  }

  return {
    props: {
      initCrop: crop || '딸기',
      initSido: sido,
      initGugun: gugun,
    }
  }
};

const CategoryWrapper = styled.div`
  display: flex;
`;

// const Title = styled.h1`
//   width: 572px;
//   height: 58px;
//   font-family: NotoSansKR;
//   font-size: 38px;
//   font-weight: bold;
//   line-height: 1.53;
//   color: #111111;
// `;

// const Main = styled.div`
//   display: flex;
//   padding: 0 0 50px;
//   border-bottom: 1px solid #e5e7e5;
// `;

const Info = styled.div`
  margin: 80px 0 0;
`;

const InfoTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InfoTitle1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 17px 6px 0;
  padding: 6px 19.5px;
  border-radius: 18px;
  background-color:#3da11e;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  display: inline-block;
`;

const InfoTitle2 = styled.div`
  height: 24px;
  margin: 6px 464px 6px 0;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  text-align: start;
  color: #3da11e;
`;

const InfoTitle3 = styled.div`
  height: 58px;
  margin: 6px 24px 0 0;
  font-family: NotoSansKR;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.53;
  color: #111111;
  `;

const InfoTitle4 = styled.div`
  width: 500px;
  height: 40px;
  margin: 15px 0 9px 17px;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #2c2c2c;
`;


export const LeftImg = styled.img`
  width: 32px;
  height: 32px;
  transform: rotate(180deg);
  flex-shrink: 0;
`;
export const RightImg = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

// const CropsContainer = styled.div`
//   margin: 64px 0 0;
//   display: flex;
//   align-items: center;
//   width: 1076px;
//   overflow: hidden;
// `;

// const Pagenation = styled.div`
//   margin: 21px 0 0;
//   text-align: center;
// `;

const Shortcuts = styled.div`
  height: 24px;
  align-items: center;
  display: flex;
  ::after {
    display: inline-block;
    content: '';
    background: url('/static/icon-chevron-right.svg') center center no-repeat;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
`;

const Button = styled.button<{ current: boolean }>`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 60px;
  padding: 19px 55px 17px 56px;
  background-color: ${({ current }) => current ? '#3da11e' : '#fff'} ;
  font-size: 16px;
  text-align: center;
  color: ${({ current }) => current ? '#fff' : '#898c88'};
`;
