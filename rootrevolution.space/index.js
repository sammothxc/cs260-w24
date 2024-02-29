document.addEventListener("DOMContentLoaded", function() {
    // Fetch username from local storage
    let username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const accountLinkElement = document.getElementById("accountLink");
    if (username) {
        // User is logged in, display username and logout button
        const logoutLink = document.createElement("a");
        logoutLink.textContent = "Logout";
        logoutLink.href = "#";
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
    
    // Check if welcome message has been displayed for the current session
    const welcomeMessageDisplayed = localStorage.getItem("welcomeMessageDisplayed");
    if (!welcomeMessageDisplayed && username) {
        // Show welcome message
        const welcomeMessage = document.createElement("p");
        welcomeMessage.textContent = "Welcome, " + username + "!";
        welcomeMessage.classList.add("welcome-message");
        document.body.insertBefore(welcomeMessage, document.body.firstChild);
        
        // Set flag in local storage to indicate welcome message has been displayed
        localStorage.setItem("welcomeMessageDisplayed", "true");
        
        // Remove the welcome message after animation completes
        setTimeout(() => {
            welcomeMessage.remove();
        }, 4000); // 4000 milliseconds = 4 seconds
    }
});
