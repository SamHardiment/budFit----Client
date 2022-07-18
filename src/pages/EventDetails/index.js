import React, {useState, useEffect} from 'react'
import axios from 'axios';

import { TopBar } from "../../components";

function EventDetails() {
    const [props, setProps] = useState({})

    useEffect(() => {
      //get request
    }, [])

    return (
        <>
            <TopBar />
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>Where? {props.location}</p>
            <p>When? {props.time}</p>
            <p>Spaces: {thisEvent.attending.length()}/{thisEvent.spaces}</p>
            <p>Attendees:</p>
            <ul>
                {props.attending.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </>
    )
}

export default EventDetails
