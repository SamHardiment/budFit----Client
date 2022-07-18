import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";

import { useAuthContext } from "./auth/index.js";

// import { io } from "socket.io-client";
// export const socket = io("http://localhost:5000");

import { NavBar } from "./components";

import "./App.css";

export const App = () => {
  const { user } = useAuthContext();

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<pages.Landing />} />
        {/*
        {!user ? (
          <> */}
        <Route path="/Login" element={<pages.Login />} />
        <Route path="/Register" element={<pages.Register />} />
        {/* </>
        ) : (
          <> */}
        <Route path="/Searching" element={<pages.Searching />} />
        <Route path="/Search" element={<pages.Search />} />

        {/* </>
        )} */}

        <Route path="/Account" element={<pages.Account />} />
        <Route path="/Chat" element={<pages.ChatRoom />} />
        <Route path="/Events" element={<pages.CreateEvent />} />
        <Route path="/Success" element={<pages.CreateEventSuccess />} />
      </Routes>
      <NavBar />
    </div>
  );
};
// import React, { useState, useEffect } from "react";
// import io from "socket.io-client";

// let endPoint = "http://localhost:5000";
// let socket = io.connect(`${endPoint}`);

// function App() {
//   const [messages, setMessages] = useState(["Hello and welcome"]);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const getMessages = () => {
//       socket.on("message", (msg) => {
//         //   let allMessages = messages;
//         //   allMessages.push(msg);
//         //   setMessages(allMessages);
//         setMessages([...messages, msg]);
//       });
//     };

//     getMessages();
//   }, [messages]);

//   const onChange = (e) => setMessage(e.target.value);

//   // On Click
//   const onClick = () => {
//     if (message !== "") {
//       socket.emit("message", message);
//       setMessage("");
//     } else {
//       alert("Please Add A Message");
//     }
//   };

//   console.log(messages);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           {messages.length > 0 &&
//             messages.map((msg) => (
//               <div>
//                 <p>{msg}</p>
//               </div>
//             ))}
//           <input value={message} name="message" onChange={(e) => onChange(e)} />
//           <button onClick={() => onClick()}>Send Message</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
