import React from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";

function Login() {
  let history = useHistory();
  const routeChange = () => {
    let path = `dashboard`;
    history.push(path);
  };

  return (
    <div class="login-container">
      <Link to="/">
        <img
          class="lumoLogo"
          alt="logo"
          src="https://medias.freeflow.zone/wp-content/uploads/2021/11/22133459/new-logo-118x118-1.png"
        />
      </Link>
      <div class="fieldsContainer">
        <h3>Member Login</h3>
        <div id="error-message" class="alert alert-danger"></div>
        <form onsubmit="return false;" method="post">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Email"
              style={{ height: "60px", width: "430px", fontSize: "1.2em" }}
            />
          </div>
          <br></br>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
              style={{
                height: "60px",
                width: "430px",
                fontSize: " 1.2em",
                marginBottom: "28px"
              }}
            />
          </div>
          <button
            type="submit"
            id="btn-login"
            class="btn btn-primary btn-block"
            style={{
              width: "400px",
              height: "50px",
              background: "#f1693c",
              border: "none",
              cursor: "pointer",
              borderRadius: "55px",
              letterSpacing: "0px",
              fontSize: "1.3em",
              margin: "auto",
              outline: "none"
            }}
            onClick={routeChange}
          >
            Log In
          </button>
          <br></br>
          <br></br>
          <button
            type="button"
            id="btn-signup"
            class="btn btn-default btn-block"
            style={{
              width: "400px",
              height: "50px",
              color: " #0E91A0",
              cursor: "pointer",
              background: " #fff",
              border: "1 px solid",
              borderRadius: "55px",
              letterSpacing: "0px",
              fontSize: "1.3em",
              margin: "auto",
              outline: "none"
            }}
            onClick={routeChange}
          >
            Sign Up
          </button>
          <br></br>
          <br></br>
          <p>OR</p>
          <br></br>
          <button
            type="button"
            id="btn-google"
            class="btn btn-default btn-danger btn-block"
            style={{
              background: "#4285f4",
              width: "400px",
              height: "50px",
              border: "none",
              cursor: "pointer",
              borderRadius: "55px",
              letterSpacing: "0px",
              fontSize: "1.3em",
              margin: "auto",
              outline: "none"
            }}
            onClick={routeChange}
          >
            Sign in with Google
          </button>
        </form>
      </div>

      <div class="dashFooter">
        <section>
          <h5>ABOUT</h5>
          <h5>CONTACT</h5>
          <h5>JOBS</h5>
          <h5>PRESS</h5>
          <h5>TERMS OF SERVICE</h5>
          <h5>PRIVACY POLICY</h5>
          <h5>FAMILY PLAN</h5>
          <h5>TEAMS</h5>
          <h5>HELP</h5>
        </section>
      </div>
    </div>
  );
}

export default Login;
