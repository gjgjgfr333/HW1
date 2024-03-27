import React from "react";
import LoginPage from "./pages/login/login_page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main/main";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/pages/main" element={<Main />} />
          </Routes>
      </Router>
  );
}

export default App;
