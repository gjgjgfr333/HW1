import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import ThemeProvider from "./context/ThemeContext";
import './i18n'



ReactDOM.render(
    <ThemeProvider>
        <Provider store={store}>
            <Suspense fallback={<div>...loading</div>}>
                <App />
            </Suspense>
        </Provider>
    </ThemeProvider>,
    document.getElementById('root')
);