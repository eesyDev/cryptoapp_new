import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../img/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className='navbar-container' style={{color: '#fff'}}>
        <div className="logo-container">
            <Avatar src={icon}/>
            <Typography.Title style={{color: '#fff'}}>
                <Link to='/'>Cryptostock</Link>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item key='1' icon={<HomeOutlined/>}>
                <Link to="/">Homepage</Link>
            </Menu.Item>
            <Menu.Item key='2' icon={<MoneyCollectOutlined/>}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item key='3' icon={<BulbOutlined/>}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar;