import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'antd/dist/antd.css';
import { Menu } from 'antd';
const { SubMenu } = Menu;
function Header() {
  return (
    <div>
        <Menu mode="horizontal">
          <Menu.Item key="home" >
            <Link to='/'>Home</Link>
          </Menu.Item>
          <SubMenu title="Profile">
            <Menu.Item key="setting:2">Change Profile</Menu.Item>
            <Menu.Item key="setting:3">Change PassWord</Menu.Item>
          </SubMenu>
          <Menu.Item key="about">
            <Link to='/about'>About</Link>
          </Menu.Item>
        </Menu>
    </div>
  );
}

export default Header;
