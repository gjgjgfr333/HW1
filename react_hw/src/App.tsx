import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from "./pages/main/main";
import LoginPage from "./pages/login/login_page";


const App: React.FC = () => {
    return (

            <Router>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/pages/main" element={<Main />} />
                </Routes>
            </Router>

    );
};

export default App;
