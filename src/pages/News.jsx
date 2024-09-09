import React, { useState, useEffect } from 'react';
import { Col, Input, Card, Typography, Select } from 'antd';
import { Link } from 'react-router-dom';

import { useGetNewsQuery } from '../services/newsApi';
import Loader from '../components/Loader';

const News = () => {
  const [type, setType] = useState('MARKET_INDEXES');
  const { data, isFetching } = useGetNewsQuery(type);
  const newsType = [
    { value: "MARKET_INDEXES", label: "Market Indexes" },
    { value: "MOST_ACTIVE", label: "Most Active" },
    { value: "GAINERS", label: "Gainers" },
    { value: "LOSERS", label: "Losers" },
    { value: "CRYPTO", label: "Crypto" },
    { value: "CURRENCIES", label: "Currencies" },
    { value: "CLIMATE_LEADERS", label: "Climate Leaders" },
  ];

  if (isFetching) return <Loader/>
  return (
    <div className='news'>
      <Select options={newsType} placeholder={'Choose type'} onChange={setType}/>

      {/* {data?.map(news => <Card><p>{}</p></Card>)} */}
    </div>
  )
}

export default News