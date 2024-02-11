import React from 'react';
import './CSS/LoginSignUp.css';

function LoginSignUp() {
  return (
    <div className="loginSignup">
      <div className="loginSignup-container">
        <h1>Sign Up</h1>
        <div className="loginSignup-fields">
          <input text="text" placeholder="your name" />
          <input text="email" placeholder="your email" />
          <input text="password" placeholder="password" />
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
          Already have an account?<span>Login here</span>
        </p>
        <div className="loginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>Be Continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
}

export default LoginSignUp;
