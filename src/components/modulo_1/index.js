import React, { Component } from 'react'

import LoginComponent from './tela-login'

class Modulo_1 extends Component {
    render() {
        return (
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
        )
    }
}

export default Modulo_1;