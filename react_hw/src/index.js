import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./healper/store";
import ThemeProvider from "./context/ThemeContext";
// import '/public/theme/index.themeCss'


ReactDOM.render(
    <ThemeProvider>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById('root')
);