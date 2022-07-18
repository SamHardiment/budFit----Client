import React from 'react'
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function EventPreview(props) {
    const { activity, dateTime, lastMessage } = props
    const icons = [{name:"Running", component:<FontAwesomeIcon icon="fa-person-running" />},
        {name:"Cycling", component:<FontAwesomeIcon icon="fa-bicycle" />},
        {name:"Football", component:<FontAwesomeIcon icon="fa-futbol-ball" />},
        {name:"Cricket", component:<SportsCricketIcon />},
        {name:"Gym", component:<FontAwesomeIcon icon="fa-dumbell" />},
        {name:"Golf", component:<FontAwesomeIcon icon="fa-golf-ball-tee" />},
        {name:"Hiking", component:<FontAwesomeIcon icon="fa-person-hiking" />},
        {name:"Basketball", component: <FontAwesomeIcon icon="fa-basketball" />}
    ]

    return (
        <div className='eventPreview'>
            <a href="#">{icons.filter(icon=>icon.name==activity).map(ele=>ele.component)}</a>
            <p className='eventPreviewDateTime'>{dateTime}</p>
            <p className='eventPreviewLastMessage'>{lastMessage}</p>
        </div>
    )
}

export default EventPreview
