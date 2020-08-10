import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { withNamespaces } from 'react-i18next';
function Header({ t }) {
  return (
    <div>
      <UlMenu>
        <LiMenu><Link to='/'>{t('main.home')}</Link></LiMenu>
        <LiMenu><Link to='/service'>{t('main.services')}</Link></LiMenu>
        <LiMenu><Link to='/contact'>Contact</Link></LiMenu>
        <LiMenu style={{float: 'right'}}><Link to='/login'>Login</Link></LiMenu>
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
export default withNamespaces()(Header);
