import React, { useEffect, useState, } from 'react';

import { useNavigate } from 'react-router-dom'

import './index.css';
import { Button } from "@mui/material";

function HomeBtns() {
    const navigate = useNavigate();

    const navigateLogin = () => {
    // 👇️ navigate to /login
    navigate('/login');
    };

    const navigateRegister = () => {
    // 👇️ navigate to /register
    navigate('/register');
    };

    return (
        <>
        <div className='login-button'>
            <Button variant="contained"className='login' onClick={navigateLogin}>Login
            </Button >
        </div>
        
        <div className='register-button'>
            <Button variant="contained" className='register' onClick={navigateRegister}>Register
            </Button>
        </div>
     
        
        </>
        
    )
}

export default HomeBtns
