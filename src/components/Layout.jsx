import Header from './Header';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">

            <div className="blueprint-overlay"></div>


            <Header />


            <main className="layout-main">
                {children}
            </main>
        </div>
    );
};

export default Layout;
