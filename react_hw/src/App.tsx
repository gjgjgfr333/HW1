import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPages from "./pages/main/MainPages";
import LoginPage from "./pages/login/LoginPage";



const App: React.FC = () => {
    return (

            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/pages/main" element={<MainPages />} />
                </Routes>
            </Router>

    );
};

export default App;
