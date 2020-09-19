import React from 'react';
import {
  Link, useRouteMatch
} from "react-router-dom";
import { withNamespaces } from 'react-i18next';

function Contact({ t }) {
  let { url } = useRouteMatch();
  return (
    <div >
      <h2>{t('main.contact')}</h2>
      <ul>
        <li>
          <Link to={`${url}/facebook`}>Facebook</Link>
        </li>
        <li>
          <Link to={`${url}/github`}>Github</Link>
        </li>
        <li>
          <Link to={`${url}/phone_number`}>Phone Number</Link>
        </li>
      </ul>
    </div>
  );
}

export default withNamespaces()(Contact);
