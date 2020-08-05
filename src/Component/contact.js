import React from 'react';
import {
  Link, useRouteMatch
} from "react-router-dom";
function Contact() {
  let { path, url } = useRouteMatch();
  return (
    <div >
      <h2>Contact</h2>
      <ul>
        <li>
          <Link to={`${url}/facebook`}>Via Facebook</Link>
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

export default Contact;
