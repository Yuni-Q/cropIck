import 'chartjs-plugin-datalabels';
import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import styled from 'styled-components';
import { Content, RankSection, Sub } from './NewCommunity';

const CropTrends: React.FC<any> = () => {
  const options1 = {
    plugins: {
      datalabels: {
        display: false,
      }
    },
    legend: {
      display: false, // label 보이기 여부
    },
    scales: {
      xAxes: [{
        maxBarThickness: 50
      }],
      yAxes: [{
        ticks: {
          min: 0, // y축 스케일에 대한 최소값 설정
          stepSize: 8000, // y축 그리드 한 칸당 수치
        }
      }]
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
  }
  const options2 = {
    plugins: {
      datalabels: {
        display: false,
      }
    },
    legend: {
      display: true, // label 보이기 여부
    },
    scales: {
      xAxes: [{
        maxBarThickness: 50
      }],
      yAxes: [{
        ticks: {
          min: 0, // y축 스케일에 대한 최소값 설정
          stepSize: 5, // y축 그리드 한 칸당 수치
        }
      }]
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
  }
  const options3 = {
    plugins: {
      datalabels: {
        display: () => {
          return true;
        },
        formatter: (_: any, data: any) => {
          return `${(data.dataset.data[data.dataIndex]).toLocaleString()}`;
        },
        anchor: 'end',
        align: 'end'
      }
    },
    legend: {
      display: false, // label 보이기 여부
    },
    scales: {
      xAxes: [{
        maxBarThickness: 50
      }],
      yAxes: [{
        ticks: {
          min: 0, // y축 스케일에 대한 최소값 설정
          stepSize: 8000, // y축 그리드 한 칸당 수치
        }
      }]
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
  }
  const options4 = {
    plugins: {
      datalabels: {
        display: () => {
          return true;
        },
        formatter: (_: any, data: any) => {
          return `${(data.dataset.data[data.dataIndex]).toLocaleString()}`;
        },
        anchor: 'end',
        align: 'end'
      }
    },
    legend: {
      display: false, // label 보이기 여부
    },
    scales: {
      xAxes: [{
        maxBarThickness: 50
      }],
      yAxes: [{
        ticks: {
          min: 0, // y축 스케일에 대한 최소값 설정
          stepSize: 8000, // y축 그리드 한 칸당 수치
        }
      }]
    },

    // false : 사용자 정의 크기에 따라 그래프 크기가 결정됨.
    // true : 크기가 알아서 결정됨.
    maintainAspectRatio: false,
  }
  const data1 = {
    // 각 막대별 라벨
    labels: [
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
    ],
    datasets: [
      {
        borderWidth: 3, // 테두리 두께
        data: [38, 39, 37, 18, 55, 38, 22], // 수치
        borderColor: "#3da11e",
        backgroundColor: "transparent",
      }
    ]
  };
  const data2 = {
    // 각 막대별 라벨
    labels: [
      '2015',
      '2016',
      '2017',
      '2018',
      '2019',
      '2020',
      '2021',
    ],
    datasets: [
      {
        label: '충북',
        borderWidth: 3, // 테두리 두께
        data: [14, 13, 10, 18, 7, 14, 6], // 수치
        borderColor: "#3da11e",
        backgroundColor: "transparent",
      },
      {
        label: '경남',
        borderWidth: 3, // 테두리 두께
        data: [13, 6, 12, 11, 13, 3, 16], // 수치
        borderColor: "#ff575e",
        backgroundColor: "transparent",
      },
      {
        label: '충남',
        borderWidth: 3, // 테두리 두께
        data: [12, 14, 17, 14, 18, 13, 14], // 수치
        borderColor: "#9ccfe6",
        backgroundColor: "transparent",
      },
    ]
  };
  const data3 = {
    // 각 막대별 라벨
    labels: ['1월', '2월', '3월', '4월'],
    datasets: [
      {
        borderWidth: 1, // 테두리 두께
        data: [10625, 8303, 8159, 12902], // 수치
        backgroundColor: ['#3ca01e', '#3b9d1d', '#3b9d1d', '#3ca01e'] // 각 막대 색
      }
    ]
  };
  const data4 = {
    // 각 막대별 라벨
    labels: ['대형유통', '마켓', '기타', '온라인'],
    datasets: [
      {
        borderWidth: 1, // 테두리 두께
        data: [10625, 8303, 8159, 7700], // 수치
        backgroundColor: ['#3ca01e', '#3b9d1d', '#3b9d1d', '#3b9d1d'] // 각 막대 색
      }
    ]
  };
  return (
    <div>
      <BarWrapper>
        <div style={{ width: '40%' }}>
          <BarTitle>도매 가격 장기 동향</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Line
              data={data1}
              options={options1}
              height={300}
            />
          </div>
        </div>
        <div style={{ width: '40%' }}>
          <BarTitle>반입량 장기 동향</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Line
              data={data1}
              options={options1}
              height={300}
            />
          </div>
        </div>
      </BarWrapper>
      <BarWrapper>
        <div style={{ width: '60%' }}>
          <BarTitle>지역별 생산량</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Line
              data={data2}
              options={options2}
              height={300}
            />
          </div>
        </div>
        <div style={{ width: '30%' }}>
          <RankSection style={{background: 'transparent'}}>
            <Sub>가격 및 반입량 동향 추가 확인</Sub>
            <Content>
              가격&#38;	반입량 페이지 이동하기
                </Content>
          </RankSection>
          <RankSection style={{background: 'transparent'}}>
            <Sub>세부 관측 내역 확인하기</Sub>
            <Content>
              농업관측월보 이동하기
                </Content>
          </RankSection>
        </div>
      </BarWrapper>
      <BarWrapper>
        <div style={{ width: '40%' }}>
          <BarTitle>월별 구입액</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Bar
              data={data3}
              options={options3}
              height={300}
            />
          </div>

        </div>
        <div style={{ width: '40%' }}>
          <BarTitle>구입처별 구입액</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Bar
              data={data4}
              options={options4}
              height={300}
            />
          </div>

        </div>
      </BarWrapper>
    </div>
  )
}

export default CropTrends;

export const Box = styled.div`
  margin: 0 0 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 260px;
  height: 280px;
  padding: 50px 49px 49px 50px;
  border-radius: 5px;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  div:nth-child(1) {
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    color: #2c2c2c;
  }
  div:nth-child(2) {
    margin: 67px 0 0;
    font-family: NotoSansKR;
    font-size: 30px;
    font-weight: bold;
    line-height: 1.93;
    text-align: center;
    color: #111111;
  }
  div:nth-child(3) {
    font-family: NotoSansKR;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    color: #a2a5a1;
  }
`;

const BarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0 0;
`;

const BarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 216px;
  height: 42px;
  padding: 9px 27px;
  opacity: 0.6;
  border-radius: 30px;
  background-color: #3da11e;
  font-family: NotoSansKR;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
`;