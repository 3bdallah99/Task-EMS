import Layout from './components/Layout';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import BottomPanel from './components/BottomPanel';
import RotateOverlay from './components/RotateOverlay';

function App() {
  return (
    <>
      <RotateOverlay />
      <div className="dashboard-wrapper" style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
        <Layout>
          <div className="dashboard-container">
            {/* Left Side Panel */}
            <LeftPanel />

            {/* Center - 3D View (background) */}
            <div className="center-content">
              {/* 3D facility view is in background */}
            </div>

            {/* Right Side Panel */}
            <RightPanel />
          </div>

          {/* Bottom Section */}
          <BottomPanel />
        </Layout>
      </div>
    </>
  );
}

export default App;
