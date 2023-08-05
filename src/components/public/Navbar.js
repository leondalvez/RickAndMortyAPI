import React from "react";

export const Navbar = () => {
  return (
    <header className="p-3 text-bg-dark text-warning">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">



          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2  justify-content-center mb-md-0">

            <li>
              <a class="navbar-brand " href="#"><img className="App-logo" src="gatito.png" alt="gato" /></a>
            </li>

            <li>
              <a
                href="https://www.ejemplo.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-warning"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="https://www.ejemplo.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-warning"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="https://www.ejemplo.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-warning"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="https://www.ejemplo.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-warning"
              >
                FAQs
              </a>
            </li>
            <li>
              <a
                href="https://www.ejemplo.com"
                target="_blank"
                rel="noreferrer"
                className="nav-link px-2 text-warning"
              >
                About
              </a>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
            <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
