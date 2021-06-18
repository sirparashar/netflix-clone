import React, { useState } from "react";
import "./LoginScreen.css";
import SignupScreen from "./SignupScreen";

function LoginScreen() {
  const [signIn, setSignIN] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginSreen_background">
        <img
          className="loginScreen_logo"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.freepnglogos.com%2Fuploads%2Fred-netflix-logo-text-png-3.png&f=1&nofb=1"
          alt=""
        />
        <button onClick={() => setSignIN(true)} className="login_button">
          Sign In
        </button>
        <div className="loginScreen_gradient" />
      </div>
      <div className="loginScreen_body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen_input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIN(true)}
                  className="getStarted_button"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
