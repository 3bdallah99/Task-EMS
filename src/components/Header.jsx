import { useState, useEffect } from 'react';
import {
    Home,
    Zap,
    Cog,
    Waves,
    Hammer,
    TrendingUp,
    Calendar,
    LayoutDashboard,
    Mic,
    Sun,
    Moon,
    Thermometer,
} from 'lucide-react';
import './Header.css';
import emsLogo from '../assets/ems-logo.png';

const navItemsLeft = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'transformers', label: 'Transformers', icon: Zap },
    { id: 'generator', label: 'Generator', icon: Cog },
    { id: 'pumps', label: 'Pumps Room', icon: Waves },
];

const navItemsRight = [
    { id: 'hammer', label: 'Hammer', icon: Hammer },
    { id: 'trend', label: 'Flow Trend', icon: TrendingUp },
    { id: 'schedules', label: 'Scheduals', icon: Calendar },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
];

const Header = () => {
    const [activeItem, setActiveItem] = useState('home');
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        }).toLowerCase();
    };

    return (
        <header className="header">
            {/* Main Header Row */}
            <div className="header-row">
                {/* Left Logo - EMS */}
                <div className="header-logo header-logo-left">
                    <div className="ems-logo">
                        <svg width="32" height="32" viewBox="0 0 50 50" className="ems-logo-svg">
                            <defs>
                                <linearGradient id="emsMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#8da0b5" />
                                    <stop offset="30%" stopColor="#cfdbe8" />
                                    <stop offset="50%" stopColor="#f5f9ff" />
                                    <stop offset="70%" stopColor="#cfdbe8" />
                                    <stop offset="100%" stopColor="#8da0b5" />
                                </linearGradient>
                                <filter id="glowMetal" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="0.5" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                            </defs>
                            <path d="M5 10 L15 10 L15 13 L8 13 L8 23 L14 23 L14 26 L8 26 L8 37 L15 37 L15 40 L5 40 Z" fill="url(#emsMetal)" filter="url(#glowMetal)" />
                            <path d="M19 10 L22 10 L25 25 L28 10 L31 10 L31 40 L28 40 L28 18 L25 32 L22 32 L22 18 L22 40 L19 40 Z" fill="url(#emsMetal)" filter="url(#glowMetal)" />
                            <path d="M35 10 L45 10 L45 13 L38 13 L38 20 L45 20 L45 40 L35 40 L35 37 L42 37 L42 27 L35 27 Z" fill="url(#emsMetal)" filter="url(#glowMetal)" />
                            <rect x="5" y="44" width="40" height="2" fill="#aabdd1" />
                        </svg>
                        <div className="ems-logo-text">
                            <span className="ems-title">EMS</span>
                            <span className="ems-subtitle">ENGINEERING MANAGEMENT SYSTEM</span>
                        </div>
                    </div>
                </div>

                {/* Navigation + Center Title + Notch Container */}
                <div className="header-nav-container">
                    {/* Left Navigation (4 icons) */}
                    <nav className="header-nav header-nav-left">
                        {navItemsLeft.map((item) => (
                            <button
                                key={item.id}
                                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <item.icon className="nav-icon" size={18} />
                                <span className="nav-label">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* Center Notch with Station Info inside */}
                    <div className="notch-wrapper">
                        {/* Station Info inside the notch */}
                        <div className="station-info">
                            <span className="station-name">AL - Choueifat</span>
                            <span className="station-subtitle">Sewage Lifting Station</span>
                        </div>
                    </div>

                    {/* Right Navigation (4 icons) */}
                    <nav className="header-nav header-nav-right">
                        {navItemsRight.map((item) => (
                            <button
                                key={item.id}
                                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
                                onClick={() => setActiveItem(item.id)}
                            >
                                <item.icon className="nav-icon" size={18} />
                                <span className="nav-label">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    {/* SVG border from Home to Dashboard with fade */}
                    <svg className="header-border-svg" viewBox="0 0 1000 25" preserveAspectRatio="none">
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(0, 212, 255, 0)" />
                                <stop offset="10%" stopColor="rgba(0, 212, 255, 0.2)" />
                                <stop offset="25%" stopColor="rgba(0, 212, 255, 0.4)" />
                                <stop offset="40%" stopColor="rgba(0, 212, 255, 0.6)" />
                                <stop offset="50%" stopColor="rgba(0, 212, 255, 0.7)" />
                                <stop offset="60%" stopColor="rgba(0, 212, 255, 0.6)" />
                                <stop offset="75%" stopColor="rgba(0, 212, 255, 0.4)" />
                                <stop offset="90%" stopColor="rgba(0, 212, 255, 0.2)" />
                                <stop offset="100%" stopColor="rgba(0, 212, 255, 0)" />
                            </linearGradient>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="1.5" result="blur1" />
                                <feGaussianBlur stdDeviation="3" result="blur2" />
                                <feMerge>
                                    <feMergeNode in="blur2" />
                                    <feMergeNode in="blur1" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        {/* Angular polygonal notch with fade at edges */}
                        <path
                            d="M 180 1 
                 L 420 1 
                 L 445 20
                 L 555 20
                 L 580 1
                 L 820 1"
                            fill="none"
                            stroke="url(#lineGradient)"
                            strokeWidth="1.5"
                            filter="url(#glow)"
                        />
                    </svg>
                </div>

                {/* Right Logo - SIEMENS */}
                <div className="header-logo header-logo-right">
                    <span className="siemens-text">SIEMENS</span>
                </div>
            </div>

            {/* Subheader Info Bar */}
            <div className="subheader-bar">
                {/* Left - Date and Time */}
                <div className="subheader-left">
                    <div className="date-time-box">
                        <span className="date-icon">☁</span>
                        <span className="date-text">{formatDate(currentTime)}</span>
                        <span className="time-divider">|</span>
                        <span className="time-text">{formatTime(currentTime)}</span>
                    </div>
                </div>

                {/* Right - Actions Card */}
                <div className="subheader-right">
                    <div className="actions-box">
                        <Sun className="action-icon sun-icon" size={14} />
                        <span className="actions-divider">|</span>
                        <Moon className="action-icon moon-icon" size={14} />
                        <span className="actions-divider">|</span>
                        <Thermometer className="temp-icon" size={14} />
                        <span className="temp-value">17.1°C</span>
                    </div>
                    <button className="mic-btn">
                        <Mic className="mic-icon" size={16} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
