import React from 'react'
import img from './logo-cropped.svg'

function TopBar() {
  return (
    <>
        <img id='topBarLogo' src={img} alt="logo" style={{height:'8vh'}} />
    </>
  )
}

export default TopBar
