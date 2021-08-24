import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(probs) {
    return (
	<nav className={`navbar navbar-expand-lg navbar-${probs.mode} bg-${probs.mode} font-link`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{probs.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                  <a href="https://www.instagram.com/innovatorved/" target="_blank" rel="noopener noreferrer" className="nav-link">{probs.cont}</a>
              </li>
            </ul>
            <div className="form-check form-switch ">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={probs.toggleMode}/>
              <label className={`form-check-label text-${probs.mode==="light"?"dark":"light"} mx-2`} htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
    </nav>
    )
}

Navbar.propTypes = {
  title : PropTypes.string.isRequired, // set required
  cont : PropTypes.string,
  mode : PropTypes.string,
  toggleMode : PropTypes.func,
}

// We Can also set default proptypres
Navbar.defaultProps = {
  cont : "Set-cont-Here",
  mode : "light",
}

