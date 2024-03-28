
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
document.addEventListener("DOMContentLoaded", function() {
    menu();
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds
});
loadUserInfo()
function menu() {
    let username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const accountLinkElement = document.getElementById("accountLink");
    if (username) {
        // User is logged in, display username and logout button
        const logoutLink = document.createElement("a");
        logoutLink.textContent = "Logout";
        logoutLink.href = "index.html";
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
        userAccount.href = "account.html";
        userAccount.classList.add("li");
        accountLinkElement.appendChild(userAccount);
    } else {
        // User is not logged in, display login link
        const loginLink = document.createElement("a");
        loginLink.href = "login.html";
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
                deleteUser(username);
                if (response.ok) {
                    // Account deletion successful
                    //localStorage.removeItem("username");
                    localStorage.clear();
                    window.location.href = '/'; // Redirect to the homepage or login page
                } else {
                    // Handle error response
                    console.error('Error deleting account:', response.statusText);
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
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}