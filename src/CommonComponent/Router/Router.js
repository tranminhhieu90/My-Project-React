import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Component/home'
import Service from '../../Component/service'
import Component from '../../Component/component'
import FaceBook from '../../Component/facebook'
import Login from '../../Component/login'
import DropFile from '../../Component/dropFile'
import NewProfile from '../../Component/NewProfile'
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/component' component={Component} />
          <Route exact path='/component/facebook' component={FaceBook} />
          <Route exact path='/component/drop_file' component={DropFile} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/new-profile' component={NewProfile} />
        </Switch>
    </div>
  );
}

export default RouterComponent;