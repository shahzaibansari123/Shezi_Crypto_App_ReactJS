import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto' 
//the above line may be imported internally as it show unused so don worry
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({coinHistory, coinName, currentPrice }) => {
    const coinPrice=[];
    const coinTimestamp=[];

    for ( let i=0; i < coinHistory?.data?.history?.length; i += 1){
        coinPrice.push(coinHistory.data.history[i].price);
        coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());

    }

    const data = {
        labels: coinTimestamp,
        datasets: [
          {
            label: 'Price In USD',
            data: coinPrice,
            fill: false,
            backgroundColor: '#0071bd',
            borderColor: '#0071bd',
          },
        ],
      };

      const options = { scales: { y: { ticks: { beginAtZero: true, }, }, }, };
    // const options = {
    //     scales: {
    //       yAxes: [
    //         {
    //           ticks: {
    //             beginAtZero: true,
    //           },
    //         },
    //       ],
    //     },
    //   };
  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} price chart
        </Title>
        <Col className="price-container">
            <Title level={5} className="price-change">{coinHistory?.data?.change}%</Title>
            <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <Line data={data} options={options}/>
    </>
  );
};

export default LineChart;
