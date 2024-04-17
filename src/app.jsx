import React from 'react';
import './app.css';

function Header() {
    return (
        <header>
            <div className='navbar-brand'>
                RootRevolution<sup>&reg;</sup>
                </div>
            <nav>
                <menu>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="chat.html">Messages</a></li>
                    <li><a href="seedmap.html">Seed Map</a></li>
                    <li><a href="about.html">About</a></li>
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
        <main>App components go here</main>
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

export default function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}