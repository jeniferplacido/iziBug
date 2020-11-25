
import './style.css'
import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import uuid from 'react-uuid';


const myId = uuid()
const socket = io('http://localhost:8080')
socket.on('connect', () => console.log('[IO] Connect => A new connection has been established'))

// import Sidebar_Profile from '../../sidebar-profile'


function Tela_Visualizar_Chat() {
    const [message, updateMessage] = useState('')
    const [messages, updateMessages] = useState([])

    useEffect(() => {
        const handleNewMessage = newMessage =>
            updateMessages([...messages, newMessage])
        socket.on('chat.message', handleNewMessage)
        return () => socket.off('chat.message', handleNewMessage)
    }, [messages])

    const handleFormSubmit = event => {
        event.preventDefault()
        if (message.trim()) {
            socket.emit('chat.message', {
                id: myId,
                message
            })
            updateMessage('')
        }
    }

    const handleInputChange = event =>
        updateMessage(event.target.value)

    return (

        <div id="tela_visualizar_chamados">
            {/* <Sidebar_Profile type="user" /> */}

        <main className="container">
            <ul className="list">
                { messages.map((m, index) => (
                    <li
                    className={`list_item list_item--${m.id === myId ? 'mine' : 'other'}`}
                        key={index}
                    >
                        <span className={`message message--${m.id === myId ? 'mine' : 'other'}`}>
                            { m.message }
                        </span>
                    </li>
                ))}
            </ul>
            <form className="form" onSubmit={handleFormSubmit}>
                <input
                    className="form__field"
                    onChange={handleInputChange}
                    placeholder="Type a new message here"
                    type="text"
                    value={message}
                />
            </form>
        </main>
        </div>
    )
   
}

export default Tela_Visualizar_Chat;

