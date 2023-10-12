import React from "react";
import "./NavBarseller.css";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { SignOutseller } from "./Signout";

export default function NavBarseller() {
  const { setIsLoggedIn } = useAuth();
  const handleSignOutClick = () => {
    // Call the signOutseller function when the button is clicked
    SignOutseller(setIsLoggedIn);
  };

  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navId">
          <div className="container-fluid">
            <Link className="navbar-brand" id="logo" to="/home">
              <img src="./images/logo.png" alt="not found" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="/navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/community">
                    Community
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Add Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" onClick={handleSignOutClick} to="/seller">
                    Sign out
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    <span class="material-symbols-outlined">search</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <span class="material-symbols-outlined">shopping_cart</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
