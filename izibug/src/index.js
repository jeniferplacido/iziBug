import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import LoginComponent from './components/tela-login'
fdafad
import './css/style.css';

// const Input = ({ id, type, label, disabled }) => (
//     <input className="form-group__input" type={type} id={id} placeholder={label} disabled={disabled}/>
// );

// const mode = 'login';

const App = () => (
    <div className={`app app--is-login`}>
        <LoginComponent
            mode="login"
            onSubmit={
                function () {
                    console.log('submit');
                }
            }
        />
    </div>
);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

