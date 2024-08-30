import React from "react";
import { Link } from "react-router-dom";

function Cookie() {
  return (
    <div>
      <div>
        <h1>Here's your cookie!</h1>
        <button>
          <Link to="/">Go Back!</Link>
        </button>
      </div>
      <img
        src="https://www.dessertfortwo.com/wp-content/uploads/2023/04/Single-Serve-Chocolate-Chip-Cookie-5.jpg"
        alt="A giant cookie"
        style={{ width: 300 + "px" }}
      />
    </div>
  );
}

export default Cookie;
