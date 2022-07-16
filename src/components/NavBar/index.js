import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

function NavBar() {
    let location = useLocation();
    console.log();
    if(location.pathname=='/'||location.pathname=='/login'||location.pathname=='/register'||location.pathname=='/searching'){
        return (
            null
        )
    }else{
        return (
            <nav className='navBar' aria-label="navBar" >
                <NavLink className="accountNavLink" activeclassname="active" to="/account">Account</NavLink>
                <NavLink className="eventsNavLink" activeclassname="active" to="/events">Events</NavLink>
                <NavLink className="searchNavLink" activeclassname="active" to="/searching">Search</NavLink>
                <NavLink className="chatNavLink" activeclassname="active" to="/chat">Chat</NavLink>
            </nav>
        )
    }
}

export default NavBar
