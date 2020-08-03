import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Component/home'
import Service from '../../Component/service'
import Contact from '../../Component/contact'
import FaceBook from '../../Component/facebook'
import GitHub from '../../Component/github'
import Login from '../../Component/login'
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/contact/facebook' component={FaceBook} />
          <Route exact path='/contact/github' component={GitHub} />
          <Route exact path='/login' component={Login} />
        </Switch>
    </div>
  );
}

export default RouterComponent;