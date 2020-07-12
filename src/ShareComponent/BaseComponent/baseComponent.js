import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { Menu } from 'antd';
function Header() {
  return (
    <div>
      <UlMenu>
        <LiMenu><a><Link to='/'>Home</Link></a></LiMenu>
        <LiMenu><a><Link to='/service'>Service</Link></a></LiMenu>
        <LiMenu><a><Link to='/contact'>Contact</Link></a></LiMenu>
        <LiMenu style={{float: 'right'}}><a><Link to='/login'>Login</Link></a></LiMenu>
      </UlMenu>
    </div>
  );
}

const UlMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
`
const LiMenu = styled.li`
  float: left;
  border-right:1px solid #bbb;
  :last-child {
    border-right: none;
  }
  a {
    display: block;
    color: white;
    text-align: center;
    padding: 10px ;
    text-decoration: none;
  }
  a:hover {
    background-color: #4CAF50;
  }
`

export default Header;
