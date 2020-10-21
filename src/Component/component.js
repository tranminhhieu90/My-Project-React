import React from 'react';
import {
  Link, useRouteMatch
} from "react-router-dom";
import { withNamespaces } from 'react-i18next';

function ListComponent({ t }) {
  let { url } = useRouteMatch();
  return (
    <div >
      <h2>{t('main.component')}</h2>
      <ul>
        <li>
          <Link to={`${url}/loading-component`}>Loading Component</Link>
        </li>
        <li>
          <Link to={`${url}/drop_file`}>Drag File</Link>
        </li>
        <li>
          <Link to={`${url}/drop_down`}>Drop Down</Link>
        </li>
      </ul>
    </div>
  );
}

export default withNamespaces()(ListComponent);
