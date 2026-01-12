import React from 'react';
import { Smartphone } from 'lucide-react';
import './RotateOverlay.css';

const RotateOverlay = () => {
    return (
        <div className="rotate-overlay">
            <div className="rotate-content">
                <Smartphone className="rotate-icon" size={64} />
                <h2>Please Rotate Your Device</h2>
                <p>This dashboard is designed for landscape view.</p>
                <div className="rotate-animation">↻</div>
            </div>
        </div>
    );
};

export default RotateOverlay;
