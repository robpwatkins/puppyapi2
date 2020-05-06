import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Router from './Router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Router />
    </BrowserRouter>
  );
}

export default App;
