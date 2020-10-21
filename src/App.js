import React from 'react';
import './App.css';
import Header from './CommonComponent/Header/header'
import Footer from './CommonComponent/Footer/footer'
import Router from './CommonComponent/Router/Router'
function App() {
  return (
    <div>
        <Header />
        <Router/>
        <Footer />
    </div>
  );
}

export default App;
