import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { TopBar } from "../../components";

function UserDetails() {
    const [props, setProps] = useState({})
    
    useEffect(() => {
      //get request
    }, [])

    return (
        <>
            <TopBar />
            <h2>{props.name} ({props.username})</h2>
            <p>Based in: {props.location}</p>
            <p>Events Joined:</p>
            <ul>
                {props.attending.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default UserDetails
