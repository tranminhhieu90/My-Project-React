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
          <Link to={`${url}/facebook`}>Facebook</Link>
        </li>
        <li>
          <Link to={`${url}/drop_file`}>Drag File</Link>
        </li>
      </ul>
    </div>
  );
}

export default withNamespaces()(ListComponent);
