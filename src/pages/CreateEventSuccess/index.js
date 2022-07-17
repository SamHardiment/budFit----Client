import React from 'react';
import { useNavigate } from "react-router-dom";

function CreateEventSuccess() {
    const navigate = useNavigate();
    
    function goToEvents() {
        navigate("/events");
    }

    function goToSearch() {
        navigate("/searching");
    }

    function goToChat() {
        navigate("/chat");
    }

  return (
  <>
    <p>Event successfully created!</p>
    <div>
        <p>What would you like to do next?</p> 
        <ul>
            <li><a onClick={goToEvents}>Create another event</a></li>
            <li><a onClick={goToSearch}>Search for events to join</a></li>
            <li><a onClick={goToChat}>View your chats</a></li>
        </ul>
    </div>
  </>
  )
}

export default CreateEventSuccess
