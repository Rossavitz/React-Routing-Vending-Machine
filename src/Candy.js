import React from "react";
import { Link } from "react-router-dom";

function Candy() {
  return (
    <div>
      <div>
        <h1>Here's your candy bar!</h1>
        <button>
          <Link to="/">Go Back!</Link>
        </button>
      </div>
      <img
        src="https://t3.ftcdn.net/jpg/00/45/11/02/360_F_45110272_l2uxEPLILRijBZtfMj2vWvvVlGS6AIbl.jpg"
        alt="A candy bar"
        style={{ width: 300 + "px" }}
      />
    </div>
  );
}

export default Candy;
