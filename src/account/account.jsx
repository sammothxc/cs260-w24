import React from 'react';
import './account.css';

export function Account() {
    return (
        <main>
            <h1>Your Account</h1>
            <div id="account" className="content-box">
                <div id="account-info" className="account-info">
                    <h2 id="username"></h2>
                    <p id="member-since" className="date"></p>
                    <br />
                    <p id="fullname"></p>
                    <p id="email"></p>
                    <p id="location"></p>
                    <p id="seeds-donated"></p>
                    <p id="seeds-received"></p>
                    <button className="poppins-semibold" id="start-campaign" onClick={() => startCampaign()}>Start Campaign</button>
                </div>
                <div id="profile-pic" className="profile-picture">
                    <img src="img/placeholder-profile.jpg" className="img-container" alt="Profile Picture"/>
                </div> 
            </div>
            <br />
            <div id="campaigns" className="grid content-box">
                <h2>Campaigns Run:</h2>
                <ul>
                <li><a href="campaign.html">Campaign 1</a></li>
                <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125"/>
                <li><a href="campaign.html">Campaign 2</a></li>
                <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125"/>
                </ul>
                <h2>Saved Campaigns:</h2>
                <ul>
                <li><a href="campaign.html">Campaign 3</a></li>
                <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125"/>
                <li><a href="campaign.html">Campaign 4</a></li>
                <img src="img/placeholder-campaign.jpg" alt="Campaign Picture" width="125"/>
                </ul>
            </div>
            <button className="delete-account-btn" onClick={() => deleteAccount()}>Delete Account</button>
         </main>
    );
}

localStorage.removeItem("attemptedDelete");
async function loadUserInfo() {
    try {
        // Get the uinfo from the service
        const response = await fetch('/api/uinfo');
        const uinfo = await response.json();

        const {
            fullname,
            email,
            location,
            username,
            membersince,
            seedsdonated,
            seedsreceived
        } = uinfo;

        // Save the uinfo in case we go offline in the future
        localStorage.setItem('uinfo', JSON.stringify(uinfo));
        const usernameElement = document.getElementById("username");
        const memberSinceElement = document.getElementById("member-since");
        const nameElement = document.getElementById("fullname");
        const emailElement = document.getElementById("email");
        const locationElement = document.getElementById("location");
        const seedsDonatedElement = document.getElementById("seeds-donated");
        const seedsReceivedElement = document.getElementById("seeds-received");

        const usernametxt = document.createElement("p");
        const memberSincetxt = document.createElement("p");
        const nametxt = document.createElement("p");
        const emailtxt = document.createElement("p");
        const locationtxt = document.createElement("p");
        const seedsDonatedtxt = document.createElement("p");
        const seedsReceivedtxt = document.createElement("p");

        usernameElement.textContent = username;
        memberSinceElement.textContent = "Member Since: " + membersince;
        nameElement.textContent = "Name: " + fullname;
        emailElement.textContent = "Email: " + email;
        locationElement.textContent = "Location: " + location;
        seedsDonatedElement.textContent = "Seeds Donated: " + seedsdonated;
        seedsReceivedElement.textContent = "Seeds Received: " + seedsreceived;

        usernameElement.appendChild(usernametxt);
        memberSinceElement.appendChild(memberSincetxt);
        nameElement.appendChild(nametxt);
        emailElement.appendChild(emailtxt);
        locationElement.appendChild(locationtxt);
        seedsDonatedElement.appendChild(seedsDonatedtxt);
        seedsReceivedElement.appendChild(seedsReceivedtxt);

    } catch {
        // If there was an error then just use the last saved uinfo
        const uinfoText = localStorage.getItem('uinfo');
        if (uinfoText) {
            uinfo = JSON.parse(uinfoText);
        }
        localStorage.setItem('uinfo', JSON.stringify(uinfo));
        const usernameElement = document.getElementById("username");
        const memberSinceElement = document.getElementById("member-since");
        const nameElement = document.getElementById("fullname");
        const emailElement = document.getElementById("email");
        const locationElement = document.getElementById("location");
        const seedsDonatedElement = document.getElementById("seeds-donated");
        const seedsReceivedElement = document.getElementById("seeds-received");

        const usernametxt = document.createElement("p");
        const memberSincetxt = document.createElement("p");
        const nametxt = document.createElement("p");
        const emailtxt = document.createElement("p");
        const locationtxt = document.createElement("p");
        const seedsDonatedtxt = document.createElement("p");
        const seedsReceivedtxt = document.createElement("p");

        usernameElement.textContent = username;
        memberSinceElement.textContent = "Member Since: " + membersince;
        nameElement.textContent = "Name: " + fullname;
        emailElement.textContent = "Email: " + email;
        locationElement.textContent = "Location: " + location;
        seedsDonatedElement.textContent = "Seeds Donated: " + seedsdonated;
        seedsReceivedElement.textContent = "Seeds Received: " + seedsreceived;

        usernameElement.appendChild(usernametxt);
        memberSinceElement.appendChild(memberSincetxt);
        nameElement.appendChild(nametxt);
        emailElement.appendChild(emailtxt);
        locationElement.appendChild(locationtxt);
        seedsDonatedElement.appendChild(seedsDonatedtxt);
        seedsReceivedElement.appendChild(seedsReceivedtxt);
    }
}

loadUserInfo()

async function deleteAccount() {
    let attemptedDelete = localStorage.getItem("attemptedDelete");
    if (!attemptedDelete) {
        localStorage.setItem("attemptedDelete", 1);
        msgBanner('Are you sure you want to delete your account? Click the delete button 3 times to confirm.', true);
        return;
    } else {
        if (parseInt(attemptedDelete) <= 2) {
            localStorage.setItem("attemptedDelete", parseInt(attemptedDelete) + 1);
            return;
        } else {
            try {
                const username = localStorage.getItem("username");
                const response = await deleteUser(username);
                console.log(response);
                if (response === 200) {
                    // Account deletion successful
                    //localStorage.removeItem("username");
                    localStorage.clear();
                    window.location.href = '/'; // Redirect to the homepage or login page
                } else {
                    // Handle error response
                    console.error('Error deleting account:' + response);
                    msgBanner('Error deleting account', true);
                    // Display an error message to the user if necessary
                }
            } catch (error) {
                console.error('Error deleting account:', error.message);
                msgBanner('Error deleting account', true);
                // Display an error message to the user if necessary
            }
        }
    }
}

function msgBanner(msg, error = false) {
    const msgB = document.createElement("p");
    msgB.textContent = msg;
    msgB.classList.add("banner-message");
    msgB.classList.add("poppins-semibold");
    if(error) { msgB.classList.add("error-message"); }
    document.body.insertBefore(msgB, document.body.firstChild);
    setTimeout(() => {
        msgB.remove();
    }, 4000); // 4000 milliseconds = 4 seconds
}

async function deleteUser(username) {
    const response = await fetch(`/api/del/${username}`, {
        method: 'DELETE',
    });
    return response.status;
}

function startCampaign() {
    window.location.href = "start-campaign";
}