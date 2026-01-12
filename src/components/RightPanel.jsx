import './RightPanel.css';
import { Activity, Droplets, TrendingUp, Settings } from 'lucide-react';

const RightPanel = () => {
    // Flow Gauge Component (m³/h)
    const FlowGauge = ({ value = 9166, max = 20000 }) => {
        const percentage = (value / max) * 100;
        const formattedValue = String(value).padStart(5, '0');
        const needleAngle = -90 + (percentage / 100) * 180;

        return (
            <div className="flow-gauge-container">
                <svg viewBox="-10 -10 120 75" className="flow-gauge-svg">
                    {/* Background arc */}
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
                        stroke="url(#flowGaugeGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(percentage / 100) * 141} 141`}
                        style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }}
                    />
                    {/* Tick marks and scale labels */}
                    {/* 0 */}
                    <line x1="5" y1="50" x2="12" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="-6" y="50" fontSize="6" fill="rgba(255,255,255,0.8)">0</text>

                    {/* 5000 */}
                    <line x1="18" y1="20" x2="24" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="0" y="12" fontSize="5" fill="rgba(255,255,255,0.7)">5000</text>

                    {/* 10000 */}
                    <line x1="50" y1="5" x2="50" y2="12" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="38" y="0" fontSize="5" fill="rgba(255,255,255,0.8)">10000</text>

                    {/* 15000 */}
                    <line x1="82" y1="20" x2="76" y2="26" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="80" y="12" fontSize="5" fill="rgba(255,255,255,0.7)">15000</text>

                    {/* 20000 */}
                    <line x1="95" y1="50" x2="88" y2="50" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <text x="97" y="54" fontSize="5" fill="rgba(255,255,255,0.8)">20000</text>
                    {/* Needle */}
                    <g transform={`rotate(${needleAngle}, 50, 50)`}>
                        <polygon
                            points="50,12 47,50 50,48 53,50"
                            fill="#00d4ff"
                            style={{ filter: 'drop-shadow(0 0 3px rgba(0, 212, 255, 0.8))' }}
                        />
                        <circle cx="50" cy="50" r="4" fill="#00d4ff" />
                    </g>
                    <defs>
                        <linearGradient id="flowGaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00d4ff" />
                            <stop offset="50%" stopColor="#00ff88" />
                            <stop offset="100%" stopColor="#ffd700" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className="flow-digits">
                    {formattedValue.split('').map((digit, i) => (
                        <span key={i} className="flow-digit">{digit}</span>
                    ))}
                    <span className="flow-unit">m³/h</span>
                </div>
            </div>
        );
    };

    // Bar Chart Data
    const weekData = [
        { day: 'Mon', value: 85 },
        { day: 'Tue', value: 70 },
        { day: 'Wed', value: 90 },
        { day: 'Thu', value: 60 },
        { day: 'Fri', value: 75 },
    ];

    return (
        <aside className="right-panel">
            {/* Station Flow Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Activity className="card-icon" size={16} />
                    <span>Station Flow</span>
                </div>
                <div className="card-content station-flow-new">
                    <div className="flow-split">
                        {/* Left - Flow Gauge */}
                        <div className="flow-gauge-section">
                            <FlowGauge value={9166} max={20000} />
                        </div>
                        {/* Right - Bar Chart */}
                        <div className="flow-chart-section">
                            <div className="chart-with-axes">
                                {/* Y Axis */}
                                <div className="y-axis">
                                    <span>25k</span>
                                    <span>20k</span>
                                    <span>15k</span>
                                    <span>10k</span>
                                    <span>5k</span>
                                    <span>0</span>
                                </div>
                                <div className="chart-area-wrapper">
                                    <div className="bar-chart">
                                        {weekData.map((item, i) => (
                                            <div key={i} className="bar-item">
                                                <div className="bar-fill" style={{ height: `${item.value}%` }}></div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* X Axis */}
                                    <div className="x-axis">
                                        {weekData.map((item, i) => (
                                            <span key={i}>{item.day}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Bottom Stats */}
                    <div className="flow-bottom-stats">
                        <div className="flow-stat-item">
                            <span className="flow-stat-label">Flow per Day</span>
                            <span className="flow-stat-value">23600 m³</span>
                        </div>
                        <div className="flow-stat-item">
                            <span className="flow-stat-label">Flow per Month</span>
                            <span className="flow-stat-value">1087378 m³</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sump Levels Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Droplets className="card-icon" size={16} />
                    <span>Sump Levels</span>
                </div>
                <div className="card-content sump-levels-new">
                    <div className="sump-split">
                        {/* Left - Tank Gauges */}
                        <div className="tank-gauges">
                            <div className="tank-gauge">
                                <div className="tank-header green">
                                    <div className="sump-text-row">
                                        <span className="sump-word">SUMP</span>
                                        <span className="sump-letter">A</span>
                                    </div>
                                    <div className="sump-line"></div>
                                </div>
                                <div className="tank-container">
                                    <div className="tank-fill green" style={{ height: '47%' }}></div>
                                    <span className="tank-percent">47%</span>
                                </div>
                            </div>
                            <div className="tank-gauge">
                                <div className="tank-header cyan">
                                    <div className="sump-text-row">
                                        <span className="sump-word">SUMP</span>
                                        <span className="sump-letter">B</span>
                                    </div>
                                    <div className="sump-line"></div>
                                </div>
                                <div className="tank-container">
                                    <div className="tank-fill cyan" style={{ height: '73%' }}></div>
                                    <span className="tank-percent">73%</span>
                                </div>
                            </div>
                        </div>
                        {/* Right - Level Bars */}
                        <div className="level-bars-card">
                            {/* Level A */}
                            <div className="level-row">
                                <span className="level-name cyan">Level A</span>
                                <div className="level-segments">
                                    {[...Array(18)].map((_, i) => (
                                        <div key={i} className={`segment ${i < 9 ? 'filled-a' : ''}`}></div>
                                    ))}
                                </div>
                                <span className="level-meter cyan">3.3 m</span>
                            </div>

                            {/* Level B */}
                            <div className="level-row">
                                <span className="level-name blue">Level B</span>
                                <div className="level-segments">
                                    {[...Array(18)].map((_, i) => (
                                        <div key={i} className={`segment ${i < 13 ? 'filled-b' : ''}`}></div>
                                    ))}
                                </div>
                                <span className="level-meter blue">5.1 m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Station Flow / Level Trend Card */}
            <div className="panel-card">
                <div className="card-header">
                    <TrendingUp className="card-icon" size={16} />
                    <span>Station Flow / Level Trend</span>
                </div>
                <div className="card-content consumption-monitor-right">
                    <div className="monitor-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="monitor-tabs">
                            <button className="tab-btn active">Flow</button>
                            <button className="tab-btn">Level</button>
                        </div>
                        <div className="monitor-value">
                            <span className="value">8,392</span>
                            <span className="unit">m³/h</span>
                        </div>
                    </div>

                    <div className="line-chart-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
                        {/* Line Chart */}
                        <svg width="100%" height="100%" viewBox="0 0 320 100" style={{ overflow: 'visible' }}>
                            <defs>
                                <linearGradient id="lineGradientRight" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                                </linearGradient>
                            </defs>

                            {/* Y-Axis Labels */}
                            <text x="0" y="70" fill="#ffffff" fontSize="5" textAnchor="start">0</text>
                            <text x="0" y="58" fill="#ffffff" fontSize="5" textAnchor="start">2K</text>
                            <text x="0" y="46" fill="#ffffff" fontSize="5" textAnchor="start">4K</text>
                            <text x="0" y="34" fill="#ffffff" fontSize="5" textAnchor="start">6K</text>
                            <text x="0" y="22" fill="#ffffff" fontSize="5" textAnchor="start">8K</text>
                            <text x="0" y="10" fill="#ffffff" fontSize="5" textAnchor="start">10K</text>

                            {/* Axes Lines */}
                            <line x1="12" y1="5" x2="12" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                            <line x1="12" y1="70" x2="320" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                            {/* Chart Line */}
                            <path d="M12,58 C40,58 50,35 70,35 S100,55 120,55 S150,20 170,20 S200,50 220,50 S250,15 270,15 S310,40 320,40"
                                fill="none" stroke="#00d4ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Time Labels */}
                            <text x="12" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="start">07:30</text>
                            <text x="62" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="middle">07:31</text>
                            <text x="112" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="middle">08:23</text>
                            <text x="162" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="middle">08:25</text>
                            <text x="212" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="middle">08:27</text>
                            <text x="262" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="middle">08:33</text>
                            <text x="315" y="82" fill="#ffffff" fontSize="5" fontWeight="500" textAnchor="end">10:11</text>
                        </svg>
                    </div>
                </div>
            </div>

            {/* System Maintenance Card */}
            <div className="panel-card">
                <div className="card-header">
                    <Settings className="card-icon" size={16} />
                    <span>System Maintenance</span>
                </div>
                <div className="card-content maintenance">
                    <div className="maintenance-header">
                        <span>System</span>
                        <span>Last Maint.</span>
                        <span>Status</span>
                        <span>Upcoming Maint.</span>
                    </div>
                    <div className="maintenance-row">
                        <span>Hammer</span>
                        <span>2025-05-12</span>
                        <span className="status operational">Operational</span>
                        <span>18 days</span>
                    </div>
                    <div className="maintenance-row">
                        <span>Fans</span>
                        <span>2025-12-30</span>
                        <span className="status overdue">Overdue</span>
                        <span>Overdue</span>
                    </div>
                    <div className="maintenance-row">
                        <span>Sub. pump</span>
                        <span>2025-01-08</span>
                        <span className="status operational">Operational</span>
                        <span>20 days</span>
                    </div>
                    <div className="maintenance-row">
                        <span>Transformers</span>
                        <span>2025-01-15</span>
                        <span className="status operational">Operational</span>
                        <span>14 days</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default RightPanel;
