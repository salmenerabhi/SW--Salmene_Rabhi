import React, { useState } from "react";
import LoginForm from "./components/LoginForm";
import Welcome from "./components/Home";
import { Stocks } from "./components/Stocks";
import logo from "./assets/Logo.png";
import "./App.css"
function App() {
  const AdminUser = {
    email: "admin@gmail.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.email == AdminUser.email &&
      details.password == AdminUser.password
    ) {
      console.log("logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("not match");
      setError("Details do not match!!!")
    }
  };
  const Logout = () => {
    console.log("logout");
    setUser({name: "",email: ""});

  };

  return (
    <div className="App">
      <img src={logo} alt="Logo" />

      
      {user.email != "" ? (
        <div className="welcome">
          
          <h2>
            <Welcome/>
            welcome, <span>{user.name}</span>
          </h2>
          
          <Stocks />


          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
