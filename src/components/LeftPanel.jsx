import './LeftPanel.css';
import { Activity, Zap, Droplets, Bell, AlertTriangle, Clock } from 'lucide-react';

const LeftPanel = () => {
    // Custom Semi-Circle Gauge with Power Digits
    const EnergyGauge = ({ value = 3113, max = 15000 }) => {
        const percentage = (value / max) * 100;
        const formattedValue = String(value).padStart(5, '0');
        // Calculate needle angle: 0% = -90deg (left), 100% = 90deg (right)
        const needleAngle = -90 + (percentage / 100) * 180;

        return (
            <div className="custom-gauge">
                <svg viewBox="-10 -10 120 75" className="gauge-svg">
                    {/* Background arc - semi circle */}
                    <path
                        d="M 5 50 A 45 45 0 0 1 95 50"
                        fill="none"
                        stroke="rgba(0, 212, 255, 0.1)"
                        strokeWidth="8"
                        strokeLinecap="round"
                    />
                    {/* Filled arc */}
                    <path
                        d="M 5 50 A 45 45 0 0 1 95 50"
                        fill="none"
                        stroke="url(#gaugeGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(percentage / 100) * 141} 141`}
                        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }}
                    />
                    {/* Tick marks and scale labels */}
                    <line x1="5" y1="50" x2="12" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="-8" y="54" fontSize="8" fill="rgba(255,255,255,0.9)">0</text>

                    <line x1="18" y1="20" x2="24" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="2" y="10" fontSize="6" fill="rgba(255,255,255,0.8)">3750</text>

                    <line x1="50" y1="5" x2="50" y2="12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="40" y="-2" fontSize="7" fill="rgba(255,255,255,0.9)">7500</text>

                    <line x1="82" y1="20" x2="76" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="78" y="10" fontSize="6" fill="rgba(255,255,255,0.8)">11250</text>

                    <line x1="95" y1="50" x2="88" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="98" y="54" fontSize="7" fill="rgba(255,255,255,0.9)">15K</text>
                    {/* Needle */}
                    <g transform={`rotate(${needleAngle}, 50, 50)`}>
                        <polygon
                            points="50,12 47,50 50,48 53,50"
                            fill="#00ffffff"
                            style={{ filter: 'drop-shadow(0 0 3px rgba(0, 255, 225, 0.8))' }}
                        />
                        <circle cx="50" cy="50" r="4" fill="#00ffffff" />
                    </g>
                    {/* Gradient */}
                    <defs>
                        <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00d4ff" />
                            <stop offset="50%" stopColor="#00ff88" />
                            <stop offset="100%" stopColor="#ffd700" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="power-digits">
                    {formattedValue.split('').map((digit, i) => (
                        <span key={i} className="digit">{digit}</span>
                    ))}
                    <span className="unit">kW</span>
                </div>
            </div>
        );
    };

    return (
        <aside className="left-panel">
            {/* Energy Consumption Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Activity className="card-icon" size={16} />
                    <span>Energy Consumption</span>
                </div>
                <div className="card-content energy-consumption">
                    <div className="energy-split">
                        {/* Left - Custom Gauge */}
                        <div className="energy-gauge">
                            <EnergyGauge value={3113} max={15000} />
                        </div>
                        {/* Right - Consumption Cards */}
                        <div className="energy-stats">
                            <div className="consumption-card">
                                <Zap className="consumption-icon" size={14} />
                                <div className="consumption-text">
                                    <span className="consumption-label">Consumption / Day</span>
                                    <span className="consumption-value ">9 MWh</span>
                                </div>
                            </div>
                            <div className="consumption-card">
                                <Zap className="consumption-icon" size={14} />
                                <div className="consumption-text">
                                    <span className="consumption-label">Consumption / Month</span>
                                    <span className="consumption-value ">332 MWh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Performance */}
                    <div className="performance-section">
                        <div className="perf-row">
                            <span className="perf-label">Performance</span>
                            <div className="perf-info">
                                <span className="perf-value">85%</span>
                                <span className="perf-status">Optimal</span>
                            </div>
                        </div>
                        <div className="perf-bar-track">
                            <div className="perf-bar-fill" style={{ width: '85%' }}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Electrical System Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Zap className="card-icon" size={16} />
                    <span>Electrical System</span>
                </div>
                <div className="card-content electrical-system">
                    <div className="gauge-cards">
                        <div className="gauge-card">
                            <span className="gauge-label">Transformer</span>
                            <div className="circular-gauge">
                                <svg viewBox="0 0 60 60">
                                    {/* Dashed outer circle */}
                                    <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1" strokeDasharray="4 3" />
                                    {/* Background circle */}
                                    <circle cx="30" cy="30" r="16" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="2.5" />
                                    {/* Fill circle */}
                                    <circle cx="30" cy="30" r="16" fill="none" stroke="url(#gaugeGrad1)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="120" strokeDashoffset="0" transform="rotate(-90 30 30)" />
                                    <defs>
                                        <linearGradient id="gaugeGrad1">
                                            <stop offset="0%" stopColor="#00d4ff" />
                                            <stop offset="100%" stopColor="#00ff88" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="gauge-center">
                                    <span className="gauge-value"><span className="num">6</span> <span className="on">ON</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="gauge-card">
                            <span className="gauge-label">Generator</span>
                            <div className="circular-gauge">
                                <svg viewBox="0 0 60 60">
                                    {/* Dashed outer circle */}
                                    <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1" strokeDasharray="4 3" />
                                    {/* Background circle only - empty gauge */}
                                    <circle cx="30" cy="30" r="16" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="2.5" />
                                </svg>
                                <div className="gauge-center">
                                    <span className="gauge-value off"><span className="num">0</span> <span className="on">ON</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="gauge-card">
                            <span className="gauge-label">ELE Panels</span>
                            <div className="circular-gauge">
                                <svg viewBox="0 0 60 60">
                                    {/* Dashed outer circle */}
                                    <circle cx="30" cy="30" r="20" fill="none" stroke="rgba(0, 212, 255, 0.2)" strokeWidth="1" strokeDasharray="4 3" />
                                    {/* Background circle */}
                                    <circle cx="30" cy="30" r="16" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="2.5" />
                                    {/* Fill circle - 92% */}
                                    <circle cx="30" cy="30" r="16" fill="none" stroke="url(#gaugeGrad3)" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="120" strokeDashoffset="10" transform="rotate(-90 30 30)" />
                                    <defs>
                                        <linearGradient id="gaugeGrad3">
                                            <stop offset="0%" stopColor="#00d4ff" />
                                            <stop offset="100%" stopColor="#00ff88" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                <div className="gauge-center">
                                    <span className="gauge-value"><span className="num">14</span> <span className="on">ON</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pumps Status Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Droplets className="card-icon" size={16} />
                    <span>Pumps Status</span>
                </div>
                <div className="card-content pumps-status">
                    <div className="pump-gauge">
                        <svg viewBox="0 0 80 80" className="pump-circle">
                            {/* Outer dashed ring */}
                            <circle cx="40" cy="40" r="38" fill="none" stroke="rgba(0, 212, 255, 0.15)" strokeWidth="1" strokeDasharray="4 2" />
                            {/* Second outer ring */}
                            <circle cx="40" cy="40" r="35" fill="none" stroke="rgba(0, 212, 255, 0.1)" strokeWidth="1" />
                            {/* Background circle */}
                            <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(0, 50, 80, 0.5)" strokeWidth="5" />
                            {/* Fill circle */}
                            <circle cx="40" cy="40" r="30" fill="none" stroke="url(#pumpGrad)" strokeWidth="5" strokeLinecap="round" strokeDasharray="188" strokeDashoffset="0" transform="rotate(-90 40 40)" />
                            <defs>
                                <linearGradient id="pumpGrad" gradientTransform="rotate(90)">
                                    <stop offset="0%" stopColor="#00d4ff" />
                                    <stop offset="100%" stopColor="#00ff88" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <div className="pump-center">
                            <span className="pump-number">3</span>
                            <span className="pump-unit">On</span>
                        </div>
                    </div>
                    <div className="pump-stats">
                        <div className="pump-stat">
                            <span className="stat-label">Pumps Group</span>
                            <span className="stat-value cyan">※ 3 ON</span>
                        </div>
                        <div className="pump-stat">
                            <span className="stat-label">Runtime / Day</span>
                            <span className="stat-value">⏱ 11.0 hr</span>
                        </div>
                        <div className="pump-stat">
                            <span className="stat-label">Runtime / Month</span>
                            <span className="stat-value">⏱ 330 hr</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Notification Monitor Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Activity className="card-icon" size={16} />
                    <span>Notification Monitor</span>
                </div>
                <div className="card-content notifications">
                    {/* Top Controls Row */}
                    <div className="notif-controls">
                        <div className="notif-badge-group">
                            <Bell className="bell-icon-yellow" size={16} />
                            <span className="badge-count">95</span>
                        </div>
                        <div className="history-label">
                            <Clock size={12} />
                            <span>History (95)</span>
                        </div>
                        <div className="control-arrows">
                            <button className="arrow-btn-small">{'<'}</button>
                            <button className="arrow-btn-small">{'>'}</button>
                        </div>
                    </div>

                    {/* Notification Item */}
                    <div className="notification-card-new">
                        <div className="notif-header-row">
                            <div className="notif-title-group">
                                <span className="status-dot red"></span>
                                <span className="notif-title-text">Hammer Very Low Level</span>
                            </div>
                            <span className="notif-time-text">10:40:35 AM</span>
                        </div>

                        <div className="notif-body-text">
                            Hammer 4 level is very low
                        </div>

                        <div className="suggested-action-box">
                            <span className="action-label">Suggested Action :</span>
                            <span className="action-text">Low sump level detected. Reduce pump operations to allow levels to recover and prevent pump damage.</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default LeftPanel;
