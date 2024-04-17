import React from 'react';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about';
import { Account } from './account/account';
import { Campaign } from './campaign/campaign';
import { Home } from './home/home';
import { Login } from './login/login';
import { Register } from './register/register';
import { Seedmap } from './seedmap/seedmap';
import { StartCampaign } from './start-campaign/start-campaign';

function Header() {
    return (
        <header>
            <div className='navbar-brand'>
                RootRevolution<sup>&reg;</sup>
                </div>
            <nav>
                <menu>
                    <li><NavLink to="home">Home</NavLink></li>
                    <li><NavLink to="seedmap">SeedMap</NavLink></li>
                    <li><NavLink to="about">About</NavLink></li>
                    <li id="accountLink"></li>
                    <li id="loginStatus"></li>
                </menu>
            </nav>
            <hr />
        </header>
    );
}

function Main() {
    return (
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path='/seedmap' element={<Seedmap />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
}

function Footer() {
    return (
        <footer>
            <hr />
            <div className="content">
                <div className="footer-left">
                    <p>Sam Warr &copy;2024</p>
                    <p>Source: <a href="https://github.com/sammothxc/startup">GitHub</a></p>
                </div>
                <div className="footer-right poppins-semibold">
                    <span id="seedCounter">Seeds Donated Since 2024: Counting...</span>
                    <p id="user-count">Loading...</p>
                </div>
            </div>
        </footer>
    );
}

function NotFound() {
    return <main>404: Return to sender. Address unknown.</main>;
}

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Main />
            <Footer />
        </BrowserRouter>
    );
}

export default App;