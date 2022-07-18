import React, { useState, useEffect } from "react";
import { useAuthContext } from "../../auth/index";

import io from "socket.io-client";

// connect to socket server
let endPoint = "http://localhost:5000";
// var socket = io.connect("http://localhost:5000");
// let socket = io();
// socket.on("connect", function () {
//   socket.emit("me event", { data: "I'm connected!" });
// });
let socket = io.connect(`${endPoint}`);

export const ChatRoom = () => {
  const [messages, setMessages] = useState(["Hello"]);
  const [message, setMessage] = useState("");

  const { logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    // navigate("/");
  };

  // Socket stuff
  useEffect(() => {
    getMessages();
  }, [messages.length]);

  const getMessages = () => {
    socket.on("message", (msg) => {
      setMessages([...messages, msg]);
    });
  };

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  const onClick = () => {
    if (message !== "") {
      socket.emit("message", message);
      setMessage("");
    } else {
      alert("Please add a message");
    }
  };

  return (
    <>
      <div>
        {messages.length > 0 &&
          messages.map((msg) => (
            <div>
              <p>{msg}</p>
            </div>
          ))}
        <input value={message} name="message" onChange={(e) => onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
      </div>
      <h1>hello </h1>
      <input
        className="logout-btn"
        type="submit"
        onClick={handleLogout}
        value="Logout"
      />
    </>
  );
};
