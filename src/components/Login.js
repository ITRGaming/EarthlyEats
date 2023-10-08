import React, { useState, useEffect } from "react";
import "./Login.css";
import Validation from "./validation";
import Homepage from "../pages/Homepage";
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

  const getErrors = async () => {
    // Make a request to the server to get the errors
    const response = await fetch('/api/errors');
  
    // Parse the response as JSON
    const errors = await response.json();
  
    // Return the errors
    return errors;
  };
  

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Wait for the errors state to be complete
    getErrors().then((errors) => {
      // Update the errors state
      setErrors(errors);
    });
  }, []);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleValidation = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  const handleSubmit = (e) => {
    handleValidation(e);
    console.log(Object.keys(errors).length);
    console.log(Object.keys(errors));
    if (Object.keys(errors).length === 0) {
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
        // 		alert("Registration Succesfull")
        // 	}
        // })
        .then((data) => {
          console.log(data.error);
        });
      // .then((data) => {
      // 	console.log(data, "userRegister")
      // })
    }
  };
  return (
    <>
      <section id="login">
        <div className="log_container">
          <input type="checkbox" id="check" />
          <div className="login form">
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

          <div className="registration form">
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
