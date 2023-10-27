import React, { useState } from "react";
import "./sellerLogin.css";
import { useAuth } from "../components/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function SellerLogin() {
  const history = useNavigate();
  const { setIsLoggedIn } = useAuth();

  const [loginValue, setLogin] = useState({
    loginEmail: "",
    loginPassword: "",
  });

  const handleData = (e) => {
    setLogin({ ...loginValue, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/login-seller", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: loginValue.loginEmail,
        password: loginValue.loginPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, data.data, "sellerIsLoggedIn");
        if (data.data != null) {
          alert("Succesfully LoggedIn");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("IsLoggedIn", true);
          setIsLoggedIn(true);
          history("/home");
        } else if (data.error === "Seller not found") {
          alert("Seller not found");
        } else if (data.error === "Invalid Password") {
          alert("Invalid Password");
        } else { alert("Unknow error, try again"); }
      });
  };

  const [values, setValues] = useState({
    name:"",
    gst:"",
    contact: null,
    email: "",
    password: "",
    confirm_password: "",
  });
  const [errors, setErrors] = useState({
    name:"",
    gst:"",
    contact: null,
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    // const validationErrors = Validation({
    //   ...values,
    //   [e.target.name]: e.target.value,
    // });
    // setErrors(validationErrors);
  };
  // const handleValidation = async (e) => {
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setErrors(Validation(values));
    fetch("http://localhost:5000/seller-register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        name: values.name,
        gst: values.gst,
        contact: values.contact,
        email: values.email,
        password: values.password,
        confirm_password: values.confirm_password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        console.log(Object.keys(data));
        if (data.error === "Email already exists") {
          alert("User Already Exists");
        } else if (data.status === "ok") {
          alert('Registration Succesfull')
          console.log(data, "userRegister");
          window.localStorage.setItem("SellerIsLoggedIn", true);
          history("/home");
        } else {
          alert("Invalid Credentials");
          setErrors(data.error);
        }
      });
    // .then((data) => {
    // })
  };


  return (
    <>
      <section id="login">
        <div className="log_container">
          <input type="checkbox" id="check" />
          <div className="login l_s_form">
            <div className="auth_div">
              <img
                className="auth_img login_img"
                alt="login"
                src="./images/auth_img.jpg"
              />
            </div>
            <div className="auth_page">
              <header>Login</header>
              <form onSubmit={handleLogin}>
                <input
                  type="text"
                  name="loginEmail"
                  placeholder="Enter your email"
                  onChange={handleData}
                  required
                />
                <input
                  type="password"
                  name="loginPassword"
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
                  Don't have a seller's account?
                  <label for="check">Signup</label>
                </span>
              </div>
              <div>
              <Link to="/">Not a seller?</Link>
              </div>
            </div>
          </div>

          <div className="registration l_s_form">
            <div className="auth_div sign_up">
              <img
                className="auth_img sign_up_img"
                alt="sign_up"
                src="./images/auth_img.jpg"
              />
            </div>
            <div className="auth_page sign_up_page">
              <header>Signup</header>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />
                {errors.name && (
                  <p style={{ color: "red" }}> {errors.name}</p>
                )}
                <input
                  type="text"
                  name="gst"
                  placeholder="Enter your gst"
                  onChange={handleChange}
                />
                {errors.gst && (
                  <p style={{ color: "red" }}> {errors.gst}</p>
                )}
                <input
                  type="number"
                  name="contact"
                  placeholder="Enter your contact"
                  onChange={handleChange}
                />
                {errors.contact && (
                  <p style={{ color: "red" }}> {errors.contact}</p>
                )}
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />
                {errors.email && (
                  <p style={{ color: "red" }}> {errors.email}</p>
                )}
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
                  Already have a seller's account?
                  <label for="check">Login</label>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SellerLogin;
