import React from "react";
import { Link } from "react-router-dom";

function Soda() {
  return (
    <div>
      <div>
        <h1>Here's your soda!</h1>
        <button>
          <Link to="/">Go Back!</Link>
        </button>
      </div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/696/402/non_2x/soda-can-drink-free-vector.jpg"
        alt="A can of soda"
        style={{ width: 300 + "px" }}
      />
    </div>
  );
}

export default Soda;
