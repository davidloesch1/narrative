import React from 'react'
import './App.css';
import auth from './auth';

export const Login =(props)=>{
    console.log(auth.isAuthenticated())
    return (<div>
        <h1>Login Page</h1>
    </div>)
}