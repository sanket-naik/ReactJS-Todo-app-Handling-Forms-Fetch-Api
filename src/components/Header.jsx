import React from 'react'
import logo from '../todo.png'

function Header() {
    return(
        <header >
            <nav className="navbar navbar-light bg-light">
            <p className="navbar-brand">
                <img src={logo} width="30" height="30" className="d-inline-block align-top" alt='todo-logo'/>
                Todo
            </p>
            </nav>
        </header>
    )
    
}

export default Header