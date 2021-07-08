import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <header className="bg-light p-3 text-capitalize fixed-header">
        <h3>
          <Link to="/">quran app</Link>
        </h3>
      </header>
    </div>
  );
}

export default Header;
