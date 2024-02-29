document.addEventListener("DOMContentLoaded", function() {
    // Fetch username from local storage
    const username = localStorage.getItem("username");
    const loginStatusElement = document.getElementById("loginStatus");
    const show_msg = localStorage.getItem("show_msg");
    
    if (username) {
        // User is logged in, display username and logout button
        const logoutButton = document.createElement("button");
        logoutButton.textContent = "Logout";
        logoutButton.onclick = function() {
            // Remove username from local storage
            localStorage.removeItem("username");
            // Reload the page to reflect changes
            location.reload();
        };
        loginStatusElement.textContent = username;
        loginStatusElement.appendChild(logoutButton);
    } else {
        // User is not logged in, display login link
        const loginLink = document.createElement("a");
        loginLink.href = "login.html";
        loginLink.textContent = "Login";
        loginStatusElement.appendChild(loginLink);
    }
    
    // Remove the welcome message after animation completes
    if (show_msg === "true") {
        setTimeout(() => {
            const welcomeMessage = document.querySelector(".welcome-message");
            if (welcomeMessage) {
                welcomeMessage.remove();
            }   
        }, 4000); // 4000 milliseconds = 4 seconds
        localStorage.setItem("show_msg", false);
    }
});
