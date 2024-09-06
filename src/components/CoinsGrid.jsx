import React, { useState, useEffect } from 'react';
import { useGetCoinsQuery } from '../services/cryptoApi';
import { Card, Row, Col, Input, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import millify from 'millify';

const CoinsGrid = ({ limited }) => {
	const limit = limited ? 12 : 48;
	const { data } = useGetCoinsQuery(limit);
	const [searchTerm, setSearchTerm] = useState('');
	const [cryptos, setCryptos] = useState([]);

	const coins = data?.data?.coins;

	console.log(coins)
	
	useEffect(() => {
		const filteredCoins = coins?.filter((item) => {
			return item.name.toLowerCase().includes(searchTerm)
		});

		setCryptos(filteredCoins?.length > 0 ? filteredCoins : coins)
	}, [coins, searchTerm]);
	return (
		<div>
			{
				!limited && <div className='search-crypto'><Input placeholder='Search crypto' onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}/></div>
			}
			<Row gutter={[24, 24]}>
				{
					cryptos?.map((coin) => (
						<Col lg={6} sm={12} xs={24} key={coin?.uuid}>
							<Link to={`/crypto/${coin?.uuid}`}>
								<Card
									title={`${coin?.rank}. ${coin?.name}`}
									extra={<Avatar src={coin?.iconUrl} />}
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
							</Link>
						</Col>
					))
				}
			</Row>
		</div>
	)
}

export default CoinsGrid