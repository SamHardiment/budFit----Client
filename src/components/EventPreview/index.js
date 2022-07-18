import React from 'react'
import 'datejs';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function EventPreview(props) {
    const { activity, dateTime, lastMessage } = props
    const icons = [{name:"Running", component:<FontAwesomeIcon icon="fa-person-running" />},
        {name:"Cycling", component:<FontAwesomeIcon icon="fa-bicycle" key={Math.random()}/>},
        {name:"Football", component:<FontAwesomeIcon icon="fa-futbol-ball" key={Math.random()} />},
        {name:"Cricket", component:<SportsCricketIcon key={Math.random()}/>},
        {name:"Gym", component:<FontAwesomeIcon icon="fa-dumbell" key={Math.random()}/>},
        {name:"Golf", component:<FontAwesomeIcon icon="fa-golf-ball-tee" key={Math.random()}/>},
        {name:"Hiking", component:<FontAwesomeIcon icon="fa-person-hiking" key={Math.random()}/>},
        {name:"Basketball", component: <FontAwesomeIcon icon="fa-basketball" key={Math.random()}/>}
    ]

    let x = Date.parse(`${dateTime}`).toString().slice(0,21);
    console.log(x);

    return (
        <div className='eventPreview'>
            <a href="#icon">{icons.filter(icon=>icon.name==activity).map(ele=>ele.component)}</a>
            <a href="#card">
                <p className='eventPreviewDateTime'>{x}</p>
                <p className='eventPreviewLastMessage'>{lastMessage}</p>
            </a>
        </div>
    )
}

export default EventPreview
