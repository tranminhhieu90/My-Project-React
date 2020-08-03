import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Header from './ShareComponent/Header/header'
import Footer from './ShareComponent/Footer/footer'
import Router from './ShareComponent/Router/Router'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
