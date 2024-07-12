import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">NewsMandu</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Account</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Shh... Surprises!
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">lol</a></li>
                    <li><a className="dropdown-item" href="/">nothing hehe</a></li>
                    <li><a className="dropdown-item" href="/"> thanks for checking out tho! </a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;
