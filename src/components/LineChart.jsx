import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Row, Col, Typography } from 'antd';

ChartJS.register(...registerables)

const LineChart = ({ coinName, coinHistory, currentPrice }) => {
    const coinPrice = [];
    const coinTimeStamp = [];

    // for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    //     coinPrice.push(coinHistory?.data?.history[i].price)
    // }

    coinHistory?.data?.history?.map(el => coinPrice.push(el.price));
    coinHistory?.data?.history?.map(el => coinTimeStamp.push(new Date(el.timestamp * 1000 ).toLocaleDateString()));

    const data = {
        labels: coinTimeStamp.reverse(),
        datasets: [{
            label: 'Price in USD',
            data: coinPrice.reverse(),
            borderColor: 'rgba(75, 192, 192, 0.2)',
            backgroundColor: "rgb(75, 192, 192)"
        }]
    }

    const options = {
        responsive: true
    }
  return (
    <>
        <Row className='chart-header'>
            <Typography.Title level={2}>Chart</Typography.Title>
            <Col>
                <Typography.Title level={5}>Change: {coinHistory?.data?.change}</Typography.Title>
                <Typography.Title level={5}>Current: {coinName} Price: $ {Math.floor(currentPrice)}</Typography.Title>
            </Col>
            <Line data={data} options={options}/>
        </Row>
    </>
  )
}

export default LineChart