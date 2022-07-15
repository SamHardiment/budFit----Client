import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css';

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
            <button className='login' onClick={navigateLogin}>login</button>
        </div>
        
        <div className='register-button'>
            <button className='register' onClick={navigateRegister}>Register</button>
        </div>
        
        
        </>
        
    )
}

export default HomeBtns
