document.addEventListener("DOMContentLoaded", function() {
    // Fetch username from local storage
    let username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const accountLinkElement = document.getElementById("accountLink");
    if (username) {
        // User is logged in, display username and logout button
        const logoutLink = document.createElement("a");
        logoutLink.textContent = "Logout";
        logoutLink.href = "index.html";
        logoutLink.onclick = function() {
            // Remove username from local storage
            localStorage.removeItem("username");
            // Remove the welcome message flag from local storage
            localStorage.removeItem("welcomeMessageDisplayed");
            // Reload the page to reflect changes
            location.reload();

            return false;
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
    const registrationMessageDisplayed = localStorage.getItem("registrationMessageDisplayed");
    const registered = localStorage.getItem("registered");
    if (!registrationMessageDisplayed && registered) {
        // Show welcome message
        setTimeout(() => {
            registrationMessageShow();
        }, 500);
    }
    // Call the updateSeedCounter function every few seconds (e.g., every 5 seconds)
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds

    // Code block for seed counter service endpoint

    // const updateCounter = async () => {
    //     try {
    //         const response = await fetch('/donationCount');
    //         const data = await response.json();
    //         const counterElement = document.getElementById('counter');
    //         counterElement.innerText = `Total Donations: ${data.count}`;
    //     } catch (error) {
    //         console.error('An error occurred while fetching donation count:', error);
    //     }
    // };

    // updateCounter();
});

function login() {
    const usernameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    if (usernameEl.value.trim() === "" || passwordEl.value.trim() === "") {
        errorMsg();
        return;
    }
    localStorage.setItem("username", usernameEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "index.html";
}

function register() {
    // Redirect to register.html
    window.location.href = "register.html";
}

function errorMsg() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please enter a username and password.";
    errorMessage.classList.add("banner-message");
    errorMessage.classList.add("error-message");
    errorMessage.classList.add("slide-in");
    errorMessage.classList.add("poppins-semibold");
    document.body.insertBefore(errorMessage, document.body.firstChild);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
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