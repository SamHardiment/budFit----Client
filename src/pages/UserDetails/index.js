import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

import { TopBar, EventPreview } from "../../components";

function UserDetails() {
    const [props, setProps] = useState()
    const [attending, setAttending] = useState([{activity: "invalid", date: new Date(), descr: "", event_id: 0, location: "", spaces: "", title: "User has not yet joined any events"}])

    let { id } = useParams();

    async function getUserData(id) {
        const { data } = await axios.get(`https://budfit.herokuapp.com/users/${id}/`);
        setProps(data[0]);

    }
    async function getMatches(id) {
        const { data } = await axios.get(`https://budfit.herokuapp.com/matches`);
        let events = data.filter(function (el) {
            return el.user_id == id;
        });

        for (let i = 0; i < events.length; i++) {
            let event = events[i];
            const { data } = await axios.get(`https://budfit.herokuapp.com/events/${event.event_id}/`);
            events[i] = data[0]
        }
        events.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        });

        if(events.length){
            setAttending(events);
        }
    }

    useEffect(() => {
        getUserData(id);
        getMatches(id);
    }, [])

    while (!props || !attending) {
        return (
            <h4>Loading...</h4>
        )
    }

    return (
        <>
            <TopBar />
            <h4>{props.name} ({props.username})</h4>
            <p>Based in: {props.preferences}</p>
            <p>Events Joined:</p>

            {attending.map((event) => (
                <EventPreview key={event.id||Math.random()} activity={event.activity} dateTime={event.date} title={event.title} />
            ))}

        </>
    )
}

export default UserDetails
