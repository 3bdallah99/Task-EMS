import './BottomPanel.css';
import { FileText, BarChart3, PieChart, Banknote, TrendingUp, TrendingDown } from 'lucide-react';

const BottomPanel = () => {
    return (
        <section className="bottom-panel">
            {/* Station Invoice Card */}
            {/* Station Invoice Card - Split Layout */}
            <div className="bottom-card">
                <div className="card-header">
                    <span>Station Invoice</span>
                </div>
                <div className="card-content invoice split-content">
                    {/* Left Side: Day */}
                    <div className="invoice-half">
                        <div className="inner-invoice-card">
                            <span className="sub-label">Invoice / Day</span>
                            <div className="invoice-icon-small">
                                <Banknote size={32} color="#00d4ff" />
                            </div>
                            <div className="invoice-data">
                                <span className="value">16,897</span>
                                <span className="unit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                    EGP <TrendingUp size={14} color="#66ffbb" style={{ strokeWidth: 2.5 }} />
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="invoice-divider"></div>

                    {/* Right Side: Month */}
                    <div className="invoice-half">
                        <div className="inner-invoice-card">
                            <span className="sub-label">Invoice / Month</span>
                            <div className="invoice-icon-small">
                                <Banknote size={32} color="#00d4ff" />
                            </div>
                            <div className="invoice-data">
                                <span className="value">644,080</span>
                                <span className="unit" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                                    EGP <TrendingDown size={14} color="#ff8888" style={{ strokeWidth: 2.5 }} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="invoice-note">
                    November 2025 is the peak invoice month to date, showing a 31% increase over October 2025.
                </p>
            </div>

            {/* Daily Consumption Monitor Card */}
            <div className="bottom-card wide">
                <div className="card-header">
                    <span>Daily Consumption Monitor</span>
                </div>
                <div className="card-content consumption-monitor">
                    <div className="monitor-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div className="monitor-tabs">
                            <button className="tab-btn active">Consumption</button>
                            <button className="tab-btn">Invoice</button>
                        </div>
                        <div className="monitor-value">
                            <span className="value">3114</span>
                            <span className="unit">kW</span>
                        </div>
                    </div>

                    <div className="line-chart-container" style={{ height: '100%', width: '100%', position: 'relative' }}>
                        {/* Simulated Line Chart */}
                        <svg width="100%" height="100%" viewBox="0 0 320 100" style={{ overflow: 'visible' }}>
                            <defs>
                                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="rgba(0, 212, 255, 0.5)" />
                                    <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                                </linearGradient>
                            </defs>

                            {/* Y-Axis Labels - Lifted & Shifted Left */}
                            <text x="0" y="70" fill="#ffffff" fontSize="5" textAnchor="start">0</text>
                            <text x="0" y="58" fill="#ffffff" fontSize="5" textAnchor="start">2K</text>
                            <text x="0" y="46" fill="#ffffff" fontSize="5" textAnchor="start">4K</text>
                            <text x="0" y="34" fill="#ffffff" fontSize="5" textAnchor="start">6K</text>
                            <text x="0" y="22" fill="#ffffff" fontSize="5" textAnchor="start">8K</text>
                            <text x="0" y="10" fill="#ffffff" fontSize="5" textAnchor="start">10K</text>

                            {/* Axes Lines - Lifted & Shifted Left */}
                            {/* Y-Axis */}
                            <line x1="12" y1="5" x2="12" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                            {/* X-Axis */}
                            <line x1="12" y1="70" x2="320" y2="70" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

                            {/* Chart Line - Lifted & Smoothed & Shifted Left */}
                            <path d="M12,58 C40,58 50,35 70,35 S100,55 120,55 S150,20 170,20 S200,50 220,50 S250,15 270,15 S310,40 320,40"
                                fill="none" stroke="#00d4ff" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

                            {/* Time Labels (Lifted & Shifted Left) */}
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

            {/* Station Performance & KPI Card */}
            <div className="bottom-card">
                <div className="card-header">
                    <span>Station Performance & KPI</span>
                </div>
                <div className="card-content performance">
                    <div className="perf-tabs">
                        <span>Pumps On: <span style={{ color: '#00d4ff' }}>3</span></span>
                        <span>Pumps Off: <span style={{ color: '#ff4d4d' }}>9</span></span>
                    </div>
                    <div className="perf-gauge">
                        <svg viewBox="0 0 100 100" className="circular-gauge">
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,212,255,0.15)" strokeWidth="5" strokeDasharray="3 2" />
                            <circle cx="50" cy="50" r="40" fill="none" stroke="#00d4ff" strokeWidth="5"
                                strokeDasharray="251.3" strokeDashoffset="188.5" strokeLinecap="round" transform="rotate(-90 50 50)"
                                style={{ filter: 'drop-shadow(0 0 6px rgba(0, 212, 255, 0.8))' }} />
                            <text x="50" y="50" textAnchor="middle" fill="#00d4ff" fontSize="18" fontWeight="700" dy="0.35em"
                                style={{ textShadow: '0 0 10px rgba(0, 212, 255, 0.8)' }}>25 %</text>
                        </svg>
                    </div>
                    <p className="perf-note">
                        On September 08, 2025, 3 / 12 pumps were activated,
                        delivering a total water flow rate of 9166 liters/min.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BottomPanel;
