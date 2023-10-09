import React, { useState, useEffect } from "react";
import "./Login.css";
import Validation from "../components/validation";
import Homepage from "./Homepage";
import { useNavigate } from "react-router-dom";

export function signOut() {
  window.localStorage.removeItem("IsLoggedIn");
}

function Login() {
  const history = useNavigate();

  const [Loginvalue, setLogin] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const handleData = (e) => {
    setLogin({ ...Loginvalue, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: Loginvalue.loginEmail,
        password: Loginvalue.loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLoggedIn");
        // history("/home")
        // alert("Succesfully LoggedIn")
        window.localStorage.setItem("token", data.data);
        window.localStorage.setItem("IsLoggedIn", true);
      });
  };

  const [values, setValues] = useState({
    email: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
      e.preventDefault();
      setErrors(Validation(values));
      console.log(Object.keys(errors).length);
      return Object.keys(errors).length === 0;

  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleValidation(e);
    
    console.log(Object.keys(errors));
    if (handleValidation(e)) {
      fetch("http://localhost:5000/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          email: values.email,
          password: values.password,
        }),
      })
        .then((res) => res.json())
        // .then((data, reg) =>
        // {
        // 	console.log(data, reg)
        // 	if (reg = "pass"){
        // 	}
        // })
        .then((data) => {
          console.log(data);
          if (data.error === "Email already exists") {
            alert("User Already Exists");
          } else {
            console.log(data, "userRegister");
            alert("Registration Succesfull");
          }
        });
      // .then((data) => {
      // })
    }
  };
  return (
    <>
      <section id="login">
        <div className="log_container">
          <input type="checkbox" id="check" />
          <div className="login l_s_form">
            <header>Login</header>
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Enter your email"
                onChange={handleData}
                required
              />
              <input
                type="password"
                placeholder="Enter your password"
                onChange={handleData}
                required
              />
              <a href="/forgotpass">Forgot password?</a>
              <input
                type="button"
                className="button"
                value="Login"
                onClick={handleLogin}
              />
            </form>
            <div className="signup">
              <span className="signup">
                Don't have an account?
                <label for="check">Signup</label>
              </span>
            </div>
          </div>

          <div className="registration l_s_form">
            <header>Signup</header>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />
              {errors.email && <p style={{ color: "red" }}> {errors.email}</p>}
              <input
                type="password"
                name="password"
                placeholder="Create a password"
                onChange={handleChange}
              />
              {errors.password && (
                <p style={{ color: "red" }}> {errors.password}</p>
              )}
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirm your password"
                onChange={handleChange}
              />
              {errors.confirm_password && (
                <p style={{ color: "red" }}> {errors.confirm_password}</p>
              )}
              <input
                type="button"
                className="button"
                value="Signup"
                onClick={handleSubmit}
              />
            </form>
            <div className="signup">
              <span className="signup">
                Already have an account?
                <label for="check">Login</label>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
