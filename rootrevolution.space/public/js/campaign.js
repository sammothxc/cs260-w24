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

    // Code Block for adding to the sitewide seed counter

    // document.getElementById('donationForm').addEventListener('submit', async (event) => {
    //     event.preventDefault();
    //     const amount = document.getElementById('amount').value;
    //     const donorName = document.getElementById('donorName').value;
    //     try {
    //         const response = await fetch('/donate', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({ amount, donorName })
    //         });
    //         if (response.ok) {
    //             updateCounter();
    //             alert('Donation submitted successfully');
    //         } else {
    //             alert('Failed to submit donation');
    //         }
    //     } catch (error) {
    //         console.error('An error occurred while submitting donation:', error);
    //         alert('Failed to submit donation');
    //     }
    // });

});
