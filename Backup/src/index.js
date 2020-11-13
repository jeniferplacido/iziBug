import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'

import Modulo_1 from './components/modulo_1'

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <Modulo_1 />
);

ReactDOM.render( 
    <BrowserRouter>
        <App/> 
    </BrowserRouter>,
    document.getElementById("app")
);

