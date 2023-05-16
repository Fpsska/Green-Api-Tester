import React from 'react';

import { Navigate } from 'react-router';

import { useAppSelector } from 'app/hooks';

// /.imports

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { isUserAuthorized } = useAppSelector(state => state.authSlice);

    // /. hooks

    if (!isUserAuthorized) {
        return (
            <Navigate
                to="/"
                replace
            />
        );
    }

    return children;
};

export default ProtectedRoute;
