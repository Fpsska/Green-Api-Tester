import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './app/components/layout/App/App';

import { store } from './app/store';
import reportWebVitals from './reportWebVitals';

// /. imports

const container = document.getElementById('root')!;
const root = createRoot(container);

// /. variables

root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
