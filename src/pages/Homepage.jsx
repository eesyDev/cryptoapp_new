import React from 'react';
import { Row, Col, Statistic, Typography } from 'antd';
import { Link } from 'react-router-dom';

import CoinsGrid from '../components/CoinsGrid';

// import Cryptocard from '../components/Cryptocard';

const Homepage = () => {
	
	return (
		<div>
			<Typography.Title>Global Crypto Stats</Typography.Title>
			<Row>
				<Col span={12}><Statistic title="Total" value="20000"/></Col>
				<Col span={12}><Statistic title="Total exchanges" value="98989823498249832"/></Col>
				<Col span={12}><Statistic title="Total Market Cap" value="349i03495039"/></Col>
				<Col span={12}><Statistic title="Total" value="20000"/></Col>
				<Col span={12}><Statistic title="Total" value="20000"/></Col>
				<Col span={12}><Statistic title="Total" value="20000"/></Col>
			</Row>
			<Row>
				<Typography.Title level={2}>
					Top 12 Cryptos
				</Typography.Title>
				<Typography.Title level={3}>
					<Link to='/cryptocurrencies'></Link>
				</Typography.Title>
			</Row>
			<CoinsGrid limited/>
		</div>
	)
}

export default Homepage