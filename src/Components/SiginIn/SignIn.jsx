import React, { useState } from 'react';
import "./SignIn.css";

function SignIn() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const phoneNumberPattern = /^\d{10}$/;
        if (!phoneNumberPattern.test(phoneNumber)) {
            setError("Please enter a valid 10-digit phone number.");
            setSuccess("");
            return;
        }
        setError("");
        signInWithPhoneNumber(phoneNumber);
    }

    const signInWithPhoneNumber = (number) => {       
        setTimeout(() => {
            setSuccess("Sign-in successful!");
            setPhoneNumber("");
        }, 1000);
    }

    return (
        <>
            <div className='sign-in-container'>
                <div>
                    <h2 style={{textAlign: 'center'}}>
                        Sign In 
                    </h2>
                    <div className='button'>
                        <button> 
                            <img src="/assets/images/icon-apple.svg" alt="icon-apple" />
                            <span> with Apple</span>
                        </button>
                        <button> 
                            <img src="/assets/images/icon-google.svg" alt="icon-google" />
                            <span> with Google</span>
                        </button>
                    </div>
                    <p style={{textAlign: 'center'}}>Or</p>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="phone-number">Phone number</label>
                            <input 
                                type="text" 
                                name="number" 
                                id="phone-number" 
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)} 
                            />
                            <button type="submit">Submit</button>
                        </form>
                        {error && <p style={{color: 'red', textAlign: 'center'}}>{error}</p>}
                        {success && <p style={{color: 'green', textAlign: 'center'}}>{success}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignIn;
