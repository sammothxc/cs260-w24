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
export default App;

function Header() {
    return (
        <header>
            <div className='navbar-brand'>
                RootRevolution<sup>&reg;</sup>
                </div>
            <nav>
                <menu>
                    <li><NavLink to="/">Home</NavLink></li>
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
            <Route path='/about' element={<About />} />
            <Route path='/account' element={<Account />} />
            <Route path='/campaign' element={<Campaign />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/seedmap' element={<Seedmap />} />
            <Route path='/start-campaign' element={<StartCampaign />} />
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

window.onload = () => {
    menu();
    setInterval(updateSeedCounter, 2000);
}

function menu() {
    let username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const accountLinkElement = document.getElementById("accountLink");
    if (username) {
        // User is logged in, display username and logout button
        const logoutLink = document.createElement("a");
        logoutLink.textContent = "Logout";
        logoutLink.href = "index";
        logoutLink.onclick = function(){
            localStorage.removeItem("username");
            localStorage.removeItem("welcomeMessageDisplayed");
            fetch(`/api/auth/logout`, {
                method: 'delete',
            }).then(() => (window.location.href = '/'));
        };
        logoutLink.classList.add("li");
        loginStatusElement.appendChild(logoutLink);
        const userAccount = document.createElement("a");
        userAccount.textContent = username;
        userAccount.href = "account";
        userAccount.classList.add("li");
        accountLinkElement.appendChild(userAccount);
    } else {
        // User is not logged in, display login link
        const loginLink = document.createElement("a");
        loginLink.href = "login";
        loginLink.textContent = "Login";
        loginStatusElement.appendChild(loginLink);
    }
}

function updateSeedCounter() {
    const seedCounterElement = document.getElementById("seedCounter");
    // Generate a random amount to increment the counter
    const incrementAmount = Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    // Get the current value of the counter and parse it as an integer
    let currentCount = parseInt(localStorage.getItem("seedCounter"));
    if (!currentCount) {
        // If the counter is not set, set it to 0
        currentCount = 0;
        localStorage.setItem("seedCounter", currentCount);
    }
    // Increment the counter by the random amount
    currentCount += incrementAmount;
    // Update the counter display
    localStorage.setItem("seedCounter", currentCount);
    seedCounterElement.textContent = currentCount + " Seeds Donated Since 2024!";
}

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);
ws.onmessage = function(event) {
    const data = JSON.parse(event.data);
    if (data.type === 'userCount') {
        document.getElementById('user-count').textContent = `Users Online: ${data.count}`;
    }
};