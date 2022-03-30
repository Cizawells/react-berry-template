import React from 'react';
import WebHeader from '../ui-component/web-header';

function Layout({ children }) {
    return (
        <>
            <WebHeader />
            <div>
                <main>{children}</main>
            </div>
        </>
    );
}
export default Layout;
