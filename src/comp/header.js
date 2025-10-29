import React from 'react'

function Header() {
  let user = JSON.parse(localStorage.getItem("mydata"));
  return (
   <>
   <header id="site-header" className="fixed-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg stroke">
        <h1><a className="navbar-brand mr-lg-5" href="index.html">
            Traversal
          </a></h1>
      <a className="navbar-brand" href="#index.html">
        <img src="image-path" alt="Your logo" title="Your logo" style={{height:'35px'}} />
      </a> 
        <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
          data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
          <span className="navbar-toggler-icon fa icon-close fa-times"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/abt">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/des">Destinations</a>
            </li>
    
            <li className="nav-item">
              <a className="nav-link" href="/con">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/log">Login</a>
            </li>
          </ul>
        </div>
        {
          localStorage.getItem("mydata") == null?
          <>
        <div className="d-lg-block d-none">
          <a href="/reg" className="btn btn-style btn-secondary">Register</a>
        </div>
        </>
        :
        <>
        <div className="d-lg-block d-none">
          <a href="/reg" className="btn btn-style btn-secondary">Welcome : {user && user.uname}</a>
        </div>
        </>

}
        <div className="mobile-position">
          <nav className="navigation">
            <div className="theme-switch-wrapper">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox"/>
                <div className="mode-container">
                  <i className="gg-sun"></i>
                  <i className="gg-moon"></i>
                </div>
              </label>
            </div>
          </nav>
        </div>
      </nav>
    </div>
    
  </header>
   </>
  );
}

export default Header;
