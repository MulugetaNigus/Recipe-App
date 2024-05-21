import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import MainRecipe from "./components/MainRecipe";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/findRecipe" element={<MainRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
