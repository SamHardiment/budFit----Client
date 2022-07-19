import React from 'react'
import 'datejs';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Warning } from '@mui/icons-material';


function EventPreview(props) {
    const { activity, dateTime, title } = props
    const icons = [{ name: "Running", component: <FontAwesomeIcon icon="fa-person-running" /> },
    { name: "Cycling", component: <FontAwesomeIcon icon="fa-bicycle" key={Math.random()} /> },
    { name: "Football", component: <FontAwesomeIcon icon="fa-futbol-ball" key={Math.random()} /> },
    { name: "Cricket", component: <SportsCricketIcon key={Math.random()} /> },
    { name: "Gym", component: <FontAwesomeIcon icon="fa-dumbell" key={Math.random()} /> },
    { name: "Golf", component: <FontAwesomeIcon icon="fa-golf-ball-tee" key={Math.random()} /> },
    { name: "Hiking", component: <FontAwesomeIcon icon="fa-person-hiking" key={Math.random()} /> },
    { name: "Basketball", component: <FontAwesomeIcon icon="fa-basketball" key={Math.random()} /> },
    { name: "invalid", component: <Warning key={Math.random()} /> }
    ]

    let x = Date.parse(`${dateTime}`).toString().slice(0, 15);

    if (activity == 'invalid') {
        return (
            <div className='eventPreview'>
                <a href="#icon">{icons.filter(icon => icon.name == activity).map(ele => ele.component)}</a>
                <a href="#card">
                    <p className='eventPreviewDateTime'>They have not yet signed up to any events.</p>
                </a>
            </div>
        )
    } else {
        return (
            <div className='eventPreview'>
                <a href="#icon">{icons.filter(icon => icon.name == activity).map(ele => ele.component)}</a>
                <a href="#card">
                    <p className='eventPreviewDateTime'>{title}</p>
                    <p className='eventPreviewLastMessage'>{x}</p>
                </a>
            </div>
        )
    }
}

export default EventPreview
