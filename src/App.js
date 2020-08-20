import React from 'react';
import './App.css';
import { BrowserRouter} from "react-router-dom";
import Header from './CommonComponent/Header/header'
import Footer from './CommonComponent/Footer/footer'
import Router from './CommonComponent/Router/Router'
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
