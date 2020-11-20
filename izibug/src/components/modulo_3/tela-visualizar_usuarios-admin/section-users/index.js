import React from 'react'

import './style.css'

function Section_Users(props) {
        return (
            <div id="card-usuarios">
                <h3>{props.userName}</h3>
                <h3>{props.userEmail}</h3>
                <h3>{props.userCargo}</h3>
                <h3>{props.userEmpresa}</h3>

                <img src="https://www.flaticon.com/svg/static/icons/svg/1160/1160515.svg"></img>
                <span>X</span>
            </div>
        )
}

export default Section_Users
