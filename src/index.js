import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import { mockedServer } from './server/';

import Layouts from './pages/layouts/Layouts';

if (process.env.NODE_ENV === 'development') {
  mockedServer(); 
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route
        render={(props) => (
          <Layouts {...props} />
        )}
      />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
