import React from 'react';
import styled from 'styled-components';
import { Bar } from 'react-chartjs-2'
import 'chartjs-plugin-datalabels';

const IncomeAnalysis: React.FC<any> = () => {
  const options = {
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
          stepSize: 10000, // y축 그리드 한 칸당 수치
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
  const data2 = {
    // 각 막대별 라벨
    labels: ['0.4km 미만', '0.4 ~ 0.8', '0.8~1.2', '1.2이상'],
    datasets: [
      {
        borderWidth: 1, // 테두리 두께
        data: [10625, 8303, 8159, 12902], // 수치
        backgroundColor: ['#3ca01e', '#3b9d1d', '#3b9d1d', '#3ca01e'] // 각 막대 색
      }
    ]
  };
  const data = {
    // 각 막대별 라벨
    labels: ['상위', '평균', '하위'],
    datasets: [
      {
        borderWidth: 1, // 테두리 두께
        data: [18600, 9500, 2400], // 수치
        backgroundColor: ['#3ca01e', '#3b9d1d', '#d2d5d1'] // 각 막대 색
      }
    ]
  };
  return (
    <div>
      <BoxWrapper>
        <Box>
          <div>소득</div>
          <div>11,963,668</div>
          <div>단위 : 원</div>
        </Box>
        <Box>
          <div>부가가치</div>
          <div>13,560,973</div>
          <div>단위 : 원</div>
        </Box>
        <Box>
          <div>부가가치율</div>
          <div>64.17</div>
          <div>%</div>
        </Box>
        <Box>
          <div>소득률</div>
          <div>57</div>
          <div>%</div>
        </Box>
      </BoxWrapper>
      <Table width="100%">
        <colgroup>
          <col width="10%" />
          <col width="30%" />
          <col width="20%" />
          <col width="20%" />
          <col width="20%" />
        </colgroup>
        <tr>
          <th colSpan={2}>비목</th>
          <th>수량(kg / 시간)</th>
          <th>단가(원)</th>
          <th>금액(원)</th>
        </tr>
        <tr>
          <td rowSpan={2}>생산비</td>
          <td>경영비</td>
          <td>1,626.7</td>
          <td>206</td>
          <td>3,660,824</td>
        </tr>
        <tr>
          <td>기타비용</td>
          <td>432.1시간</td>
          <td>
            남 : 10,926<br />
            여 :6,240
          </td>
          <td>15,652,884.0</td>
        </tr>
      </Table>
      <Comment>*10a 기준 *2019 조사 기준 *단위 : 천원</Comment>
      <BarWrapper>
        <div style={{ width: '40%' }}>
          <BarTitle>상위 하위 농가 소득 비교</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Bar
              data={data}
              options={options}
              height={300}
            />
          </div>

        </div>
        <div style={{ width: '40%' }}>
          <BarTitle>규모별 소득</BarTitle>
          <div style={{ width: '100%', marginTop: 20 }}>
            <Bar
              data={data2}
              options={options2}
              height={300}
            />
          </div>

        </div>
      </BarWrapper>
    </div>
  )
}

export default IncomeAnalysis;

const Table = styled.table`
  margin: 50px 0 0;
  width: 100%;
  th {
    height: 48px;
    margin: 0 20px 0 0;
    padding: 15px 0 15px;
    background-color: #f5f5f5;
    font-weight: 700;
  }
  td {
    border: 1px solid #e9e8e8;
    text-align: center;
    height: 150px;
    vertical-align: middle;
    padding: 0 0 0 12px;
    background-color: #fff;
  }
`;

const Comment = styled.div`
  margin: 12px 0 0;
  font-family: NotoSansKR;
  font-size: 14px;
  color: #898c88;
`;

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

const BoxWrapper = styled.div`
  margin: 40px 0 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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