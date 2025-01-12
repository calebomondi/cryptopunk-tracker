import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Assign from './components/assign/assign';
import Notonsale from './components/notonsale/notonsale';
import Onsale from './components/onsale/onsale';
import Transfer from './components/transfer/transfer';
import Sold from './components/sold/sold';
import IMG from '/crypto.png';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { path: "/cryptopunk-tracker/", label: "Punks Claimed" },
        { path: "/cryptopunk-tracker/sold", label: "Punks Sold" },
        { path: "/cryptopunk-tracker/transferred", label: "Punks Transferred" },
        { path: "/cryptopunk-tracker/on-sale", label: "Punks On Sale" },
        { path: "/cryptopunk-tracker/no-longer-on-sale", label: "Punks No Longer On Sale" }
    ];

    return (
        <Router>
            <div className="min-h-screen">
                {/* Header */}
                <div className={`dark:bg-slate-800 bg-blue-100`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between md:justify-center items-center py-4">
                            {/* Logo and Title */}
                            <div className="flex items-center space-x-4">
                                <img src={IMG} alt="CryptoPunk" className="md:h-16 md:w-16 w-10  rounded-full border border-dashed border-blue-700" />
                                <h1 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-gray-300">CryptoPunk Tracker</h1>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={toggleMenu}
                                className="md:hidden p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                            >
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="dark:bg-slate-900 shadow-lg top-0 left-0 sticky m-1 rounded-lg bg-blue-100">
                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.path}
                                    to={item.path}
                                    end
                                    className={({ isActive }) =>
                                        `block px-3 py-2 rounded-md text-base font-medium ${
                                            isActive
                                                ? 'bg-blue-500 text-white'
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                                        }`
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-center space-x-4">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        end
                                        className={({ isActive }) =>
                                            `px-3 py-4 text-sm font-medium ${
                                                isActive
                                                    ? 'border-b-2 border-blue-500 text-blue-500'
                                                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                                            }`
                                        }
                                    >
                                        {item.label}
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <Routes>
                        <Route path="/cryptopunk-tracker/" element={<Assign />} />
                        <Route path="/cryptopunk-tracker/sold" element={<Sold />} />
                        <Route path="/cryptopunk-tracker/transferred" element={<Transfer />} />
                        <Route path="/cryptopunk-tracker/on-sale" element={<Onsale />} />
                        <Route path="/cryptopunk-tracker/no-longer-on-sale" element={<Notonsale />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;