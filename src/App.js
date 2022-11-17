import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
const App = () => {
  return (
    <Router>
      <div className="flex h-screen flex-col justify-between">
        <NavBar />
        <main>Content</main>
      </div>
    </Router>
  );
};

export default App;
