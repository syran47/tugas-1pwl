import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img
            className="img-logo"
            src="https://firebasestorage.googleapis.com/v0/b/mriski-aziz.appspot.com/o/logo%2FLogo%20(2)'.png?alt=media&token=5595a594-a179-4788-999e-c69109eb9254"
            alt="logo"
          />
        </Link>
        <Link
          to="/favorites"
          className="favorites text-right"
          style={{ textDecoration: "none" }}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
};

export default Header;
