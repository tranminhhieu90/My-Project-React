import React from 'react';
import {
  Link
} from "react-router-dom";
import styled from 'styled-components'
import 'antd/dist/antd.css';
import { withNamespaces } from 'react-i18next';
function Header({ t, i18n }) {
  return (
    <div>
      <UlMenu>
        <LiMenu><Link to='/'>{t('main.home')}</Link></LiMenu>
        <LiMenu><Link to='/service'>{t('main.services')}</Link></LiMenu>
        <LiMenu><Link to='/component'>{t('main.component')}</Link></LiMenu>
        <LiMenu>
          <DropdownDiv>
            <Link to='#'>Profile</Link>
            <DropContent>
              <a href="/new-profile">New Profile</a>
              <a href="/change-pass">Change Password</a>
              <a href="/change-email">Change Email</a>
            </DropContent>
          </DropdownDiv>
        </LiMenu>
        <LiMenu style={{ float: 'right' }}><Link to='/login'>Login</Link></LiMenu>
        <LiMenu style={{ float: 'right' }}>
          <Translate>
            <TranslateSpan onClick={() => i18n.changeLanguage('en')}>ENG</TranslateSpan> |
            <TranslateSpan onClick={() => i18n.changeLanguage('vi')} >VIE</TranslateSpan>
          </Translate>
        </LiMenu>
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
const Translate = styled.div`
  color: white;
  display: block;
  color: white;
  text-align: center;

  padding: 10px ;
  border-right:1px solid #bbb;
`

const TranslateSpan = styled.span`
  cursor: grab;
`


const DropContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  a {
    float: none;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
  }
  a:hover {
    background-color: #ddd;
  }
`
const DropdownDiv = styled.div`
  :hover
  ${DropContent} {
    display: block;
  }
}
`
export default withNamespaces()(Header);
