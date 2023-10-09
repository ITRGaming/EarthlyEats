import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" id='navId'>
                    <div className="container-fluid">
                        <Link className="navbar-brand" id='logo' to="/home"><img src="./images/logo.png" alt="not found" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/community">Community</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/about">About</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Login/Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/search"><span class="material-symbols-outlined">
                                        search
                                    </span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/cart"><span class="material-symbols-outlined">
                                        shopping_cart
                                    </span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

