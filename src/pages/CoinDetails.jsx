import React from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Typography } from 'antd';
import { DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, TrophyOutlined } from '@ant-design/icons';
import { useGetCoinDetailQuery } from '../services/cryptoApi';

const CoinDetails = () => {
    const { coinId } = useParams();
    const {data} = useGetCoinDetailQuery(coinId);
    const cryptoDetails = data?.data?.coin
    console.log(cryptoDetails)

    const { Title, Text } = Typography;

    const coinStats = [
        {title: 'Price to usd', value: `${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined/>},
        {title: 'Rank', value: `${cryptoDetails?.rank && millify(cryptoDetails?.rank)}`, icon: ''},
        {title: 'Volume 24h', value: `${cryptoDetails['24hVolume'] && millify(cryptoDetails?.rank)}`, icon: <NumberOutlined/>},
        {title: 'ATH', value: `${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <ThunderboltOutlined/>},
        {title: 'Market Cap', value: `${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined/>}
    ];

    
  return (
    <div>
        <Col className='stats-container'>
            <Col className='coin-value-statistics'>
                <Col className='coin-valie-statistics-heading'>
                    <Title level={2}>
                        {cryptoDetails?.name} Value Statistic
                    </Title>
                    <p>An overview showing the stats of {cryptoDetails?.name} such as base, price, rank and volume </p>
                </Col>
                {
                    coinStats.map(({title, icon, value}) => (
                        <Col className='coin-stats' key={title}>
                            <Col className='coin-stats-name'>
                                <Text>{icon}</Text>
                                <Text>{title}</Text>
                            </Col>
                            <Text className='stats'>{value}</Text>
                        </Col>
                    ))
                }
            </Col>
        </Col>
    </div>
  )
}

export default CoinDetails