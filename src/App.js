import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Cookie from "./Cookie";
import Soda from "./Soda";
import Candy from "./Candy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/cookie" element={<Cookie />} />
          <Route path="/soda" element={<Soda />} />
          <Route path="/candy" element={<Candy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
