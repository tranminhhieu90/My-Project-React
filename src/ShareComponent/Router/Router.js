import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Component/home'
import User from '../../Component/user'
import About from '../../Component/about'
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/user' component={User} />
          <Route path='/about' component={About} />
        </Switch>
    </div>
  );
}

export default RouterComponent;