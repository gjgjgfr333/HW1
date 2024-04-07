import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPages from "./pages/main/MainPages";
import LoginPage from "./pages/login/LoginPage";
import {Provider} from "react-redux";
import store from "./redux/store";
import ThemeProvider from "./context/ThemeContext";


const App: React.FC = () => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <Suspense fallback={<div>...loading</div>}>
                    <Router>
                        <Routes>
                            <Route path="/" element={<LoginPage />} />
                            <Route path="/pages/main" element={<MainPages />} />
                        </Routes>
                    </Router>
                </Suspense>
            </Provider>
        </ThemeProvider>




    );
};

export default App;
