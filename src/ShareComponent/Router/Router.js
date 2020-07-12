import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Component/home'
import Service from '../../Component/service'
import Contact from '../../Component/contact'
import Login from '../../Component/login'
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/service' component={Service} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
        </Switch>
    </div>
  );
}

export default RouterComponent;