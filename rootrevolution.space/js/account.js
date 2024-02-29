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
    let membersince = localStorage.getItem("membersince");
    let fullname = localStorage.getItem("fullname");
    let email = localStorage.getItem("email");
    let location = localStorage.getItem("location");
    let seedsdonated = localStorage.getItem("seedsdonated");
    let seedsreceived = localStorage.getItem("seedsreceived");

    if (username) {
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

        usernametxt.textContent = username;
        memberSincetxt.textContent = "Member Since: " + membersince;
        nametxt.textContent = "Name: " + fullname;
        emailtxt.textContent = "Email: " + email;
        locationtxt.textContent = "Location: " + location;
        seedsDonatedtxt.textContent = "Seeds Donated: " + seedsdonated;
        seedsReceivedtxt.textContent = "Seeds Received: " + seedsreceived;

        usernameElement.appendChild(usernametxt);
        memberSinceElement.appendChild(memberSincetxt);
        nameElement.appendChild(nametxt);
        emailElement.appendChild(emailtxt);
        locationElement.appendChild(locationtxt);
        seedsDonatedElement.appendChild(seedsDonatedtxt);
        seedsReceivedElement.appendChild(seedsReceivedtxt);

        // usernameElement.textContent = userData.username;
        // memberSinceElement.textContent = "Member Since: " + userData.memberSince;
        // nameElement.textContent = "Name: " + userData.name;
        // emailElement.textContent = "Email: " + userData.email;
        // locationElement.textContent = "Location: " + userData.location;
        // seedsDonatedElement.textContent = "Seeds Donated: " + userData.seedsDonated;
        // seedsReceivedElement.textContent = "Seeds Received: " + userData.seedsReceived;
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
