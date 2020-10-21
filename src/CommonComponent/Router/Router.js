import React from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Home from '../../Component/home'
import Service from '../../Component/service'
import Component from '../../Component/component'
import Loading from '../../Component/loading'
import Login from '../../Component/login'
import DropFile from '../../Component/dropFile'
import NewProfile from '../../Component/NewProfile'
import NotFound from '../../Component/notFound'
// import DropDown from '../../Component/dropDown'
function RouterComponent() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/component' component={Component} />
          <Route exact path='/component/loading-component' component={Loading} />
          <Route exact path='/component/drop_file' component={DropFile} />
          {/* <Route exact path='/component/drop_down' component={DropDown} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/new-profile' component={NewProfile} />
          <Route component={NotFound} />
        </Switch>
    </div>
  );
}

export default RouterComponent;