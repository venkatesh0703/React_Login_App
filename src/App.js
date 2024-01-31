import React, { useState } from "react";

import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    
    {
      username: "ADMIN",
      password: "1234"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (

    <div className="form">
      <div id="bg"></div>
      <form onSubmit={handleSubmit}>
        <div className="form-field" >

          <input type="text" name="uname" required />

        </div>
        {renderErrorMessage("uname")}
        <div className="form-field">
          <input type="password" name="pass" required />
        </div>
        {renderErrorMessage("pass")}
        <div className="form-field">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">venkatesh</div>
        {isSubmitted ? <div>venkatesh simple login page using react</div> : renderForm}
      </div>
    </div>
  );
}

export default App;