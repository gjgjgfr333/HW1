import React from "react";
import LoginPage from "./pages/login/login_page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main/main";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/pages/login" element={<LoginPage />} />
              <Route path="/" element={<Main />} />
          </Routes>
      </Router>
  );
}

export default App;
