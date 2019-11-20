import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-inverse mb-5 primary-color">
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          <strong>NEWMAP</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#">
                Tenancy Registered
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/license">
                Get / Renew License
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#">
                Message
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="#">
                Rules and Regulations
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto text-center">
            <div className="btn-group">
              <img
                src="images/user2.png"
                alt="user"
                className="profile-image my-auto"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              />
              <li
                className="nav-item text-left"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <Link className="nav-link text-light" to="#">
                  <strong>Ademola Gbadamosi</strong> <br />
                  Landlord
                </Link>
              </li>
              <i
                className="fa fa-angle-down my-auto text-light"
                data-toggle="dropdown"
              ></i>
              <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">
                  Profile
                </button>
                <button className="dropdown-item" type="button">
                  Logout
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
