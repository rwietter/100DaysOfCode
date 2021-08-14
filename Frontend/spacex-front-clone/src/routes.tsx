import React, { FC } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home/home'


const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}
export default Routes
