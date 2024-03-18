import React from "react";
import Template from "../components/Template";
import signupImg from "../assets/signup.png";

const Signup = ({ setIsLoggedIn }) => {
  return (
    <div>
      <Template
        title="Join the Millions learning to code with StudyNotion for free"
        desc1="Build Skills for Today,Tomorrow and Beyond."
        desc2="Education to future your career."
        image={signupImg}
        formtype={"signup"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Signup;
