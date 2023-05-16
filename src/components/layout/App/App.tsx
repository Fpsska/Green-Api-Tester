import React from 'react';

import { Route, Routes } from 'react-router-dom';

import Layout from 'components/layout/Layout';

import AuthPage from 'pages/AuthPage';
import ChatPage from 'pages/ChatPage';
import NoFoundPage from 'pages/NoFoundPage';
import ProtectedRoute from 'components/hoc/ProtectedRoute';

import './App.css';
import 'assets/styles/style.scss';

// /. imports

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<AuthPage />}
                    />
                    <Route
                        path="chat"
                        element={
                            <ProtectedRoute>
                                <ChatPage />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="*"
                        element={<NoFoundPage />}
                    />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
