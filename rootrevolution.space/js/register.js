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
    // Function to update the sitewide seed donation counter
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
    // Call the updateSeedCounter function every few seconds (e.g., every 5 seconds)
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds
});

function register() {
    const fullnameEl = document.querySelector("#fullname");
    const emailEl = document.querySelector("#email");
    const locationEl = document.querySelector("#location");
    const usernameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");

    if (usernameEl.value.trim() === "" || passwordEl.value.trim() === "" || fullnameEl.value.trim() === "" || emailEl.value.trim() === "" || locationEl.value.trim() === "" || usernameEl.value.trim() === "" || passwordEl.value.trim() === "") {
        alert("Please fill out all fields, or put N/A if not applicable.");
        return;
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const seedsdonated = 5930;
    const seedsreceived = 340;

    localStorage.setItem("membersince", formattedDate);
    localStorage.setItem("fullname", fullnameEl.value);
    localStorage.setItem("email", emailEl.value);
    localStorage.setItem("location", locationEl.value);
    localStorage.setItem("username", usernameEl.value);
    localStorage.setItem("password", passwordEl.value);
    localStorage.setItem("seedsdonated", seedsdonated);
    localStorage.setItem("seedsreceived", seedsreceived);
    window.location.href = "login.html";
}