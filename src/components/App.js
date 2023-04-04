import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';

import '../styles/App.css';
const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>

  )
}


export default App;
