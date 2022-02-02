import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../../componenets/sign-in/sign-in.component";
import SignUp from "../../componenets/sign-up/sign-up.component";

const signInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up ">
        <SignIn />
        <SignUp />
    </div>
)

export default signInAndSignUpPage;

