import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Menu, Typography, Avatar } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, MenuOutlined } from '@ant-design/icons';

import icon from '../img/cryptocurrency.png';

const Navbar = () => {
    const location = useLocation();

    const [activeMenu, setActiveMenu] = useState();

    const isActive = (path) => {
        return location.pathname === path
    }


  return (
    <div className='navbar-container' style={{color: '#fff'}}>
        <div className="logo-container">
            <Avatar src={icon}/>
            <Typography.Title style={{color: '#fff'}}>
                <NavLink to='/'>Cryptostock</NavLink>
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item key='1' icon={<HomeOutlined/>} className={isActive('/') ? 'active-menu-item' : ''}>
                <NavLink to="/">Homepage</NavLink>
            </Menu.Item>
            <Menu.Item key='2' icon={<MoneyCollectOutlined/>} className={isActive('/cryptocurrencies') ? 'active-menu-item' : ''}>
                <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
            </Menu.Item>
            <Menu.Item key='3' icon={<BulbOutlined/>} className={isActive('/news') ? 'active-menu-item' : ''}>
                <NavLink to="/news">News</NavLink>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default Navbar;