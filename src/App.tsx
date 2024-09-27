import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
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
                        to="/cryptopunk-tracker/" 
                        end 
                        className={({ isActive }) => isActive ? 'active-link' : ''}
                    >
                        Punks Claimed
                    </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/cryptopunk-tracker/sold" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks Sold
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/cryptopunk-tracker/transferred" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks Transferred
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/cryptopunk-tracker/on-sale" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks On Sale
                        </NavLink>
                    </li>
                    <li>
                    <NavLink 
                            to="/cryptopunk-tracker/no-longer-on-sale" 
                            end 
                            className={({ isActive }) => isActive ? 'active-link' : ''}
                        >
                            Punks No Longer On Sale
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/cryptopunk-tracker/" element={<Assign />} />
                <Route path="/cryptopunk-tracker/sold" element={<Sold />} />
                <Route path="/cryptopunk-tracker/transferred" element={<Transfer />} />
                <Route path="/cryptopunk-tracker/on-sale" element={<Onsale />} />
                <Route path="/cryptopunk-tracker/no-longer-on-sale" element={<Notonsale />} />
            </Routes>
        </Router>
    );
}

export default App;
