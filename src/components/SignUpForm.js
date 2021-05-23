import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { signUp } from "../redux/userAuthentication";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &:hover {
    color: red;
  }
`;

function SignUpForm() {
  const history = useHistory();
  const [username, setUserName] = useState("");
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    const addedUser = {
      username: username,
      email: email,
      password: password,
    };
    signUp({ username, email, password }, () => {
      history.replace("/signin");
    });
    setUserName("");
    setEmailId("");
    setPassword("");
  };
  return (
    <div class="col-sm-6 offset-3 p-5">
      <h3 className="text-center mt-5 form-head">CREATE YOUR ACCOUNT HERE</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="mt-5 p-3 sign-up-form"
      >
        <div className="form-group row mb-4 mt-5">
          <label className="col-sm-2 col-form-label offset-1">User Name</label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control col-sm-3"
              placeholder="Enter username"
              required
              name="user-name"
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-2 col-form-label offset-1">Email</label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control col-sm-3"
              placeholder="example@mail.com"
              required
              name="email-id"
              value={email}
              onChange={(e) => {
                setEmailId(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label className="col-sm-2 col-form-label offset-1">Password</label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control col-sm-3"
              placeholder="Enter your password"
              required
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center mt-5 mb-4">
          <button
            type="submit"
            className="btn ml-2 p-2 px-3"
            aria-pressed="true"
          >
            Sign up
          </button>
        </div>
        <div className="text-center mb-5">
          <StyledLink to="/signin">Have an account ?</StyledLink>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
