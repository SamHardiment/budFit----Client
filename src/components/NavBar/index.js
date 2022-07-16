import React from 'react'
import { NavLink } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='navBar'>
            <NavLink className="accountNavLink" activeclassname="active" to="/account">Account</NavLink>
            <NavLink className="eventsNavLink" activeclassname="active" to="/events">Events</NavLink>
            <NavLink className="searchNavLink" activeclassname="active" to="/searching">Search</NavLink>
            <NavLink className="chatNavLink" activeclassname="active" to="/chat">Chat</NavLink>
        </nav>
    )
}

export default NavBar
