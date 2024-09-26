import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Assign from './components/assign/assign';
import Notonsale from './components/notonsale/notonsale';
import Onsale from './components/onsale/onsale';
import Transfer from './components/transfer/transfer';
import Sold from './components/sold/sold';
import './App.css'
import IMG from '../public/crypto.png'

function App() {
    return (
        <Router>
            <div className='Title-Main'>
              <img src={IMG} alt="" />
              <h1>CryptoPunk Tracker</h1>
            </div>
            <nav>
                <ul>
                    <li>
                    <NavLink 
                        to="/" 
                        end 
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Punks Claimed
                    </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/sold" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks Sold
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/transferred" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks Transferred
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/on-sale" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks On Sale
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/no-longer-on-sale" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks No Longer On Sale
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Assign />} />
                <Route path="/sold" element={<Sold />} />
                <Route path="/transferred" element={<Transfer />} />
                <Route path="/on-sale" element={<Onsale />} />
                <Route path="/no-longer-on-sale" element={<Notonsale />} />
            </Routes>
        </Router>
    );
}

export default App;
