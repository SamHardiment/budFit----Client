import React from 'react'
import {  TopBar } from "../../components";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../../auth/index.js"
import './index.css'

function Error404() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  function handleSearchClick(){
    navigate('/searching')
  }

  function handleLandingClick(){
    navigate('/')
  }

  if(user){
    return (
      <>
        <TopBar />
        <div className='errorPageContainer'><h4>Oops, you're lost.</h4>
        <p>We can't find the page you're looking for.</p>
        <p>Would you like to <a onClick={handleSearchClick}><strong>return to the search page</strong></a>?</p></div>
      </>
    )
  } else{
    return (
      <>
        <TopBar />
        <div className='errorPageContainer'><h4>Oops, you're lost.</h4>
        <p>We can't find the page you're looking for.</p>
        <p>You need to <a onClick={handleLandingClick}><strong>register or log in</strong></a> first.</p></div>
      </>
    )
  }
}

export default Error404
