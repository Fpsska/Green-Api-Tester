import React, { useEffect } from 'react';

import { useNavigate, useLocation } from 'react-router';

// /. imports

const NoFoundPage: React.FC = () => {
    const navigation = useNavigate();
    const location = useLocation();

    // /. hooks

    useEffect(() => {
        navigation(location.pathname, { state: 'unknown' });
    }, [location.pathname]);

    // /. hooks

    return (
        <section className="empty-section">
            <h2 className="section-title">Page no found</h2>
        </section>
    );
};

export default NoFoundPage;
