import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import './app.css'
import 'tachyons'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
        <App/>
    </Router>
    , document.getElementById('root')
  );
