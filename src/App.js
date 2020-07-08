import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Main from './ShareComponent/Main/main'
import SwitchRouter from './ShareComponent/Router/Router'
function App() {
  return (
    <div>
      <Router>
        <Main />
        <SwitchRouter/>
      </Router>
    </div>
  );
}

export default App;
