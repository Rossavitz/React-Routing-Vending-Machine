import React from "react";
import { Link } from "react-router-dom";
import "./VendingMachine.css";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <img
        src="https://img.freepik.com/premium-vector/vending-machine-with-snacks-semi-flat-color-vector-item-realistic-object-white-selling-drinks-food-isolated-modern-cartoon-style-illustration-graphic-design-animation_151150-8254.jpg"
        alt="cartoon vending machine"
      />
      <ul>
        Vending Machine Options:
        <li>
          <Link to="/cookie">Cookie</Link>
        </li>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/candy">Candy</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
