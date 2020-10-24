import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import './server';

import Layouts from './pages/layouts/Layouts';

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
