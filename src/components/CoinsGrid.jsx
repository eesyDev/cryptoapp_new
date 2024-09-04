import React from 'react';
import { useGetCoinsQuery } from '../services/cryptoApi';
import { Card, Row, Col, Input, Avatar } from 'antd';
import millify from 'millify';

const CoinsGrid = ({ limited }) => {
    const limit = limited ? 12 : 48;
    const { data } = useGetCoinsQuery(limit);

	const coins = data?.data?.coins;
	console.log(coins)
  return (
        <Row gutter={[24, 24]}>
			{
				coins?.map((coin) => (
					<Col lg={6} sm={12} xs={24}>
						<Card 
							title={`${coin?.rank}. ${coin?.name}`}
							extra={<Avatar src={coin?.iconUrl}/>}
						>
							<p>
								Price {millify(coin?.price)}
							</p>
							<p>
								Market Cap: {millify(coin?.marketCap)}
							</p>
							<p>
								Daily Cahnge: {coin?.change}%
							</p>
						</Card>
					</Col>
				))
			}
			</Row>
  )
}

export default CoinsGrid