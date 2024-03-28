document.addEventListener("DOMContentLoaded", function() {
    menu();
    // Check if welcome message has been displayed for the current session
    welCheck();
    // Call the updateSeedCounter function every few seconds (e.g., every 5 seconds)
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds
  
});

function welcomeMessageShow(username) {
    const welcomeMessage = document.createElement("p");
    welcomeMessage.textContent = "Welcome, " + username + "!";
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

function menu() {
    let username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const accountLinkElement = document.getElementById("accountLink");
    if (username) {
        // User is logged in, display username and logout button
        const logoutLink = document.createElement("a");
        logoutLink.textContent = "Logout";
        logoutLink.href = "index.html";
        logoutLink.onclick = logout();
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

function welCheck() {
    let welcomeMessageDisplayed = localStorage.getItem("welcomeMessageDisplayed");
    let username = localStorage.getItem("username");
    if (!welcomeMessageDisplayed && username) {
        setTimeout(() => {
            welcomeMessageShow(username);
        }, 500);
    }
}

function logout() {
    localStorage.removeItem('username');
    localStorage.removeItem("welcomeMessageDisplayed");
    fetch(`/api/auth/logout`, {
        method: 'delete',
    }).then(() => (window.location.href = '/'));
}