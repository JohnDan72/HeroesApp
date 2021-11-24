import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './customBootstrap.css';
import 'rsuite/styles/index.less';

import AppRouter from './routes/AppRouter';


ReactDOM.render(
    <AppRouter />
    ,
  document.getElementById('root')
);