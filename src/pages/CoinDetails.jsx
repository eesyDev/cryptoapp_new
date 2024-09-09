import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import millify from 'millify';
import { Col, Typography, Select } from 'antd';
import { DollarCircleOutlined, NumberOutlined, ThunderboltOutlined, TrophyOutlined, ExclamationCircleOutlined, CheckCircleOutlined, StopOutlined } from '@ant-design/icons';
import { useGetCoinDetailQuery, useGetCoinPriceHistoryQuery } from '../services/cryptoApi';
import LineChart from '../components/LineChart';

const CoinDetails = () => {
    const { coinId } = useParams();
    const { data, isFetching } = useGetCoinDetailQuery(coinId);
    const [time, setTime] = useState('7d')
    const {data : coinHistory} = useGetCoinPriceHistoryQuery({id: coinId, timeperiod: time})
    const cryptoDetails = data?.data?.coin
    
    const timestamps = ['3h', '24h', '3d', '7d', '30d', '1y', '2y'];

    const handleChangePeriod = (val) => {
      setTime(val)
    }

    const { Title, Text } = Typography;
    const { Option } = Select;

    const coinStats = [
        {title: 'Price to usd', value: `${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined/>},
        {title: 'Rank', value: `${cryptoDetails?.rank && millify(cryptoDetails?.rank)}`, icon: ''},
        {title: 'Volume 24h', value: `${ cryptoDetails && cryptoDetails?.['24hVolume'] && millify( cryptoDetails && cryptoDetails?.['24hVolume'])}`, icon: <NumberOutlined/>},
        {title: 'ATH', value: `${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <ThunderboltOutlined/>},
        {title: 'Market Cap', value: `${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined/>}
    ];

    const coinStatsTwo = [
        {
          title: "Number of markets",
          value: `${
            cryptoDetails?.numberOfMarkets &&
            millify(cryptoDetails?.numberOfMarkets)
          }`,
          icon: <DollarCircleOutlined />,
        },
        {
          title: "Number of Exchanges",
          value: `${
            cryptoDetails?.numberOfExchanges &&
            millify(cryptoDetails?.numberOfExchanges)
          }`,
          icon: <NumberOutlined />,
        },
        {
          title: "Approved Supply",
          value: cryptoDetails?.supply?.confirmed ? (
            <CheckCircleOutlined />
          ) : (
            <StopOutlined />
          ),
          icon: <ExclamationCircleOutlined />,
        },
        {
          title: "Total Supply",
          value: `${
            cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
          }`,
          icon: <DollarCircleOutlined />,
        },
        {
          title: "Circulating Supply",
          value: `${
            cryptoDetails?.supply?.circulating &&
            millify(cryptoDetails?.supply?.circulating)
          }`,
          icon: <TrophyOutlined />,
        },
      ];

  if (isFetching) return <div>Loading ....</div>
  return (
    <Col className='coin-details-container'>
      <Col className='coin-heading-container'>
        <Title className='coin-name'>{cryptoDetails?.name}</Title>
        <Text>{cryptoDetails?.name} live price in US Dollar (USD). View value statistics, market cap and supply</Text>
      </Col>
      <Select placeholder="Choose a time" onChange={(value) => handleChangePeriod(value)}>
        {
          timestamps.map((el, i) => <Option key={i} value={el}>{el}</Option>)
        }
      </Select>
      <LineChart coinName={cryptoDetails?.name} coinHistory={coinHistory} currentPrice={cryptoDetails?.price}/>
      <Col className='stats-container'>
          <Col className='coin-value-statistics mt-8'>
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
          <Col className='coin-value-statistics mt-8'>
              <Col className='coin-valie-statistics-heading'>
                  <Title level={2}>
                      {cryptoDetails?.name} Value Statistic
                  </Title>
                  <p>An overview showing the stats of {cryptoDetails?.name} such as base, price, rank and volume </p>
              </Col>
              {
                  coinStatsTwo.map(({title, icon, value}) => (
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
    </Col>
  )
}

export default CoinDetails