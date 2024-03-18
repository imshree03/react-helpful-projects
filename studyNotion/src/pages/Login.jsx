import React from "react";
import Template from "../components/Template";
import LoginImage from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build Skills for Today,Tomorrow and Beyond."
        desc2="Education to future your career."
        image={LoginImage}
        formtype={"login"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
