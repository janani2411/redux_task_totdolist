import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../index.css";
import { signIn } from "../redux/userAuthentication";
import styled from "styled-components";

const StyledLink = styled(Link)`
  &:hover {
    color: red;
  }
`;

function SignInForm() {
  const history = useHistory();
  const [email, getEmailId] = useState("");
  const [password, getPassword] = useState("");
  const handleSubmit = (e) => {
    signIn({ email, password }, () => {
      history.replace(`/alltasks`);
    });
    getEmailId("");
    getPassword("");
  };
  return (
    <div class="col-sm-6 offset-3 p-5">
      <h3 className="text-center mt-5 form-head">LOGIN HERE</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
        className="mt-5 p-3 sign-in-form"
      >
        <div className="form-group row mb-5 mt-5">
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
                getEmailId(e.target.value);
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
                getPassword(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="text-center mb-4 mt-5">
          <button
            type="submit"
            className="btn btn-primary ml-2 p-2 px-3"
            aria-pressed="true"
          >
            Sign in
          </button>
        </div>
        <div className="text-center mb-5 mt-4">
          <StyledLink to="/signup">
            Create account if you don't have an account
          </StyledLink>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
