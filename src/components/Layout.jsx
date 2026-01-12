import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
            {/* Blueprint Grid Overlay */}
            <div className="blueprint-overlay"></div>

            {/* Header */}
            <Header />

            {/* Main Content Area */}
            <main className="layout-main">
                {children}
            </main>
        </div>
    );
};

export default Layout;
