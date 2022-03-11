import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyles from "./global/globalStyles";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <GlobalStyles />
        <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
