import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './home.css';

export function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        regCheck();
        welCheck();
        return () => {
        };
    }, []);

    return (
        <main>
            <h1>Your SeedFeed</h1>
            <hr />
            <div id="user-based">
                <div id="local" className="grid">
                    <h3>Your Community in Provo</h3>
                    <ul>
                        <div className='c-box'>
                            <a>Neighborhood Veggie Garden</a>
                            <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                            <button className="poppins-semibold c-button" onClick={() => navigate('/campaign')}>View</button>
                        </div>
                        <div className='c-box'>
                            <a>Carrot garden for Provo Elderly Care Center</a>
                            <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                            <button className="poppins-semibold c-button" onClick={() => navigate('/campaign')}>View</button>
                        </div>
                        <div className='c-box'>
                            <a>Sarah's Planting Club</a>
                            <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                            <button className="poppins-semibold c-button" onClick={() => navigate('/campaign')}>View</button>
                        </div>
                        <div className='c-box'>
                            <a>Foster Elementary 4th Grade Garden</a>
                            <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                            <button className="poppins-semibold c-button" onClick={() => navigate('/campaign')}>View</button>
                        </div>
                        <li><a href="campaign">Neighborhood Veggie Garden</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="recently-viewed" className="grid">
                    <h3>Recently Viewed</h3>
                    <ul>
                        <li><a href="campaign">Saved Campaign 1</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">Saved Campaign 2</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">Saved Campaign 3</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="saved" className="grid">
                    <h3>Saved</h3>
                    <ul>
                        <li><a href="campaign">Neighborhood Veggie Garden</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">Carrot garden for Provo Elderly Care Center</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">Sarah's Planting Club</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
                <hr className="seedfeed"/>
                <div id="seed-match" className="grid">
                    <h3>Seeds you may have</h3>
                    <ul>
                        <li><a href="campaign">[Tomato] 1000 Tomato seeds for local Elementary School</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">[Pepper] 50,000 Pepper seeds to feed Town after natural disaster</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">[Carrot] Carrot garden for Elderly Care Center</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                        <li><a href="campaign">[Rose] 911 Rose seeds for 9/11 community memorial flowerbed</a></li>
                        <img src="/placeholder-campaign.jpg" alt="Campaign Picture" width="125" />
                    </ul>
                </div>
            </div>
        </main>
    );
}

function welCheck() {
    let welcomeMessageDisplayed = JSON.parse(localStorage.getItem("welcomeMessageDisplayed"));
    let registered = JSON.parse(localStorage.getItem("registered"));
    let username = localStorage.getItem("username");
    if (!welcomeMessageDisplayed && username && registered) {
        setTimeout(() => {
            welcomeMessageShow(username);
        }, 500);
    }
}

function regCheck() {
    const registrationMessageDisplayed = JSON.parse(localStorage.getItem("registrationMessageDisplayed"));
    const registered = JSON.parse(localStorage.getItem("registered"));
    if (!registrationMessageDisplayed && registered) {
        setTimeout(() => {
            registrationMessageShow();
        }, 500);
    } else {
    }
}

function registrationMessageShow() {
    const registrationMessage = document.createElement("p");
    registrationMessage.textContent = "Registration successful! Welcome to RootRevolution!";
    registrationMessage.classList.add("banner-message");
    registrationMessage.classList.add("poppins-semibold");
    document.body.insertBefore(registrationMessage, document.body.firstChild);
    // Set flag in local storage to indicate registration message has been displayed
    localStorage.setItem("registrationMessageDisplayed", "true");
    // Remove the registration message after animation completes
    setTimeout(() => {
        registrationMessage.remove();
    }, 4000); // 4000 milliseconds = 4 seconds
}

function welcomeMessageShow(username) {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome back, " + username + "!";
    welcomeMessage.classList.add("banner-message");
    welcomeMessage.classList.add("poppins-semibold");
    document.body.insertBefore(welcomeMessage, document.body.firstChild);
    
    // Set flag in local storage to indicate welcome message has been displayed
    localStorage.setItem("welcomeMessageDisplayed", "true");

    // Remove the welcome message after animation completes
    setTimeout(() => {
        welcomeMessage.remove();
    }, 4000); // 4000 milliseconds = 4 seconds
}
