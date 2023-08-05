import React, { useState } from "react";

export const Footer = () => {

  const [clicks, setClicks] = useState(0);

  const year = new Date().getFullYear();
  const companyName = "Haru";

  const handleClicks = () => {

    setClicks(clicks + 1);

  }

  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top text-white">
        <p className="col-md-4 mb-0">
          &copy; {year} {companyName} Company, Inc Clicks= {clicks}
        </p>

        <a
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          onClick={handleClicks}
        >
          <img className="App-logo" src="gatito.png" alt="gato" />
        </a>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 body-secondary text-warning"
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 body-secondary text-warning"
            >
              Features
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 body-secondary text-warning"
            >
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 body-secondary text-warning"
            >
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.ejemplo.com"
              target="_blank"
              rel="noreferrer"
              className="nav-link px-2 body-secondary text-warning"
            >
              About
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};
