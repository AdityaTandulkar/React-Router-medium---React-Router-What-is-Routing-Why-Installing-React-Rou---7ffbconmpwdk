import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import { AppRoutes } from '../AppRoutes';

import '../styles/App.css';
const App = () => {

  return (
    <BrowserRouter>
      <Link to='/color/blue'>Color</Link>
      <Link to={`/calculator?num1=&num2=&op=`}>Calculator</Link>
      <AppRoutes />
    </BrowserRouter>

  )
}


export default App;
