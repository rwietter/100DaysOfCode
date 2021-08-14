import React, { FC } from 'react';

import Routes from './routes';
import { GlobalStyle } from './globalStyles/global';

const App: FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
};

export default App;
