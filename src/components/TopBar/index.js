import React from 'react'
import img from './placeholder_logo.png'

function TopBar() {
  return (
    <div>
        <h1 style={{display:'inline', fontSize:'6vh'}}>budFit</h1>
        <img src={img} alt="logo" style={{height:'8vh'}} />
    </div>
  )
}

export default TopBar
