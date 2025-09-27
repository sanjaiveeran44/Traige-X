// src/App.jsx
import React from "react";
import "./App.css";
import "./pages/RootPage.css";
import RootPage from "./pages/RootPage";
import LoginPage from "./pages/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<RootPage/>} />
          <Route path="/login" element={<LoginPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

