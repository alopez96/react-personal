import React from "react";
import ReactDOM from "react-dom";
import Main from "./Main";
import "./index.css";
import './main.css';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
        <Main />
    </Router>
    , document.getElementById('root')
  );
