import React from 'react';
import styled from 'styled-components';
import { More, PopularCommunityWrapper, Title, TitleWrapper } from './PopularCommunity';

const News:React.FC = () => {
  return (
    <PopularCommunityWrapper>
      <TitleWrapper>
        <Title>농업 HOT 뉴스</Title>
        <More>더보기</More>
      </TitleWrapper>
      <NewsArrayWrapper>
        {[{title: '시군을 대상으로 병원균의 월동처가 되는 궤양 제거와 전정도구 소독 등을 철저히 해줄 것을 당부했다.',
        content: `과수화상병은 배․사과 등에 발생하며 감염 시 잎․꽃․가지․줄기․과일 등이 마치 화상을 입은 것처럼 갈색 또는 검정색으로 변해 마르는 증상을 보인다.

올해 충북, 경기, 충남 지역을 중심으로 지난 해 발생건수의 3배가 넘게 발생 함에 따라 전국적인 전염원 확산이 우려되는 상황이다.

여기에 공제방제 대상인 과수화상병 발생과원에 대한 손실보상금을 현재까지는 국가에서 100% 지급했지만, 앞으로는 국가에서 80%, 시․도에서 20%를 부담하도록 식물방역법 시행령의 일부개정을 진행 중이어서 지자체(시․도)의 부담이 커질 예정이다.

전라남도 농업기술원은 치료약이 없는 과수화상병의 유입을 차단하기 위한 실천사항을 다음과 같이 당부했다.

첫째, 배․사과 주산지를 중심으로 자체 예찰 강화는 물론, 농가 스스로 주 1회 이상 자가 예찰을 실시하고, 이상증상 발견 시 즉시 1833-8572로 신고하여야 한다.

둘째, 과수화상병을 발생시키는 병원균의 월동처가 될 수 있는 궤양을 제거하고 도포약제를 발라 주어야 하며

셋째, 동계 전정 시 전정도구와 장화, 작업도구 등의 철저한 소독으로 오염원을 차단하여야 한다.

전남농업기술원 김남균 기술보급과장은 “우리 지역은 현재 과수화상병 청정지역이지만, 올해 전북 배 재배농가에서도 처음 발생한 만큼 긴장을 늦출 수 없다며, 농업인들의 적극적인 예찰과 전파 차단을 위해 만전을 기해 주길 바란다”고 말했다.`,
        },{
          title: '팜한농(대표 이유진)이 3일 "바이오기업인의 날" 유공자 포상식에서 ‘산업통상자원부 장관상’을 수상했다.',
          content: `산업통상자원부가 주최하고 한국바이오협회와 한국산업기술평가관리원(KEIT)이 공동 주관하는 '바이오기업인의 날'은 국내 바이오산업 발전에 기여한 기업의 성과를 알리고 우수 공로자를 격려하기 위해 열리는 행사다.

서울 양재동 더케이 호텔에서 열린 이날 행사에는 바이오 분야 산·학·연 연구자와 산업부 및 KEIT 관계자 등 50여 명이 참석했다. 팜한농은 ’13년 11월부터 ’17년 4월까지 42개월간 진행한 '혁신 비선택성 제초제 글로벌 사업화' 과제의 성과를 인정받아 장관상을 받았다.

산업통상자원부의 지원을 받아 한국화학연구원과 공동으로 진행한 과제를 통해 개발한 신물질 비선택성 제초제 ‘테라도’는 저약량으로도 화본과·광엽 잡초 및 글리포세이트(Glyphosate) 저항성 잡초 제초효과가 탁월하다. 또한 국내외 대면적 생물활성 시험과 250건 이상의 안전성 시험으로 성능의 우수성과 인축(人畜)·환경 안전성이 검증됐다.

팜한농이 10년 넘는 시간을 들여 개발한 ‘테라도’는 인축 및 환경 독성 등 사회적인 이슈와 기존 글리포세이트계 제초제 장기간 사용에 따른 저항성 잡초 발생 등 글로벌 제초제 시장의 문제를 해결할 수 있는 새로운 제초제로 주목받고 있다. 이러한 글로벌 제품 경쟁력을 인정받아 ‘테라도’는 최근 국내 최초로 미국 환경보호청(EPA)의 식용작물용 작물보호제 등록에 성공했다. 앞서 지난해에는 한국표준협회가 주관한 ‘대한민국 혁신대상’에서 신기술혁신상 대상을 수상하기도 했다.

김영권 팜한농 작물보호연구소장은 “팜한농의 혁신적인 기술력으로 개발한 ‘테라도’가 인정받고 있어 기쁘다”며, “지속적인 연구개발과 품질혁신으로 그린바이오 분야 국내 1위를 넘어 글로벌 시장에서 경쟁하겠다”고 말했다.`,
        },{
          title: '한 손에 쏙 ‘애플수박’',
          content: `"수박의 계절"인 여름, 충남 부여군의 한 애플수박 농가에서 출하를 앞둔 애플수박이 익어가고 있다. 우리나라 전체 가구 중 1인 가구 비율이 30%를 넘어서면서 냉장고 공간을 적게 차지하고 음식물쓰레기가 덜 나오는 미니 과일이 주목받고 있다.`,
        }].map((news: any, idx: number) => {
          return (
      <NewsWrapper key={news.title}>
        <NewsImage src={`/static/news${idx + 1}.jpg`} />
          <NewsTitle>{news.title}</NewsTitle>
        <NewsContent>{news.content}</NewsContent>
      </NewsWrapper>
          )
        })}
      </NewsArrayWrapper>
    </PopularCommunityWrapper>
    
  )
}

export default News;

const NewsArrayWrapper = styled.div`
  display: flex;

`;

const NewsWrapper = styled.div`
`
const NewsImage = styled.img`
  width: 230px;
  height: 150px;
  margin: 16px 30px 10px 0;
  border-radius: 2px;
`;

const NewsContent = styled.div`
  font-size: 14px;
  width: 230px;
  white-space: normal;
	line-height: 1.43;
	height: 5.72em;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 4;
	-webkit-box-orient: vertical;
	overflow: hidden;
  word-break: break-all;
  color: #676a66;
`;

const NewsTitle = styled.div`
  font-size: 16px;
  width: 230px;
  white-space: normal;
	line-height: 1.43;
	height: 1.43;
	text-align: left;
	word-wrap: break-word;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
	overflow: hidden;
  word-break: break-all;
  font-weight: 700;
  color: #111111;
`;