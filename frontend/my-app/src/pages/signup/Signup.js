import React from 'react'
import SignupForm from '../../components/SignupForm/SignupForm';
import './signup.css'

export default function Signup() {

    return (
        <div className="signup-" >
        <h2>
            Signup 
        </h2>
            <div className = "signup-form">
                <SignupForm />
            </div>
        </div>
    );
}
