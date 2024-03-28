// (async () => {
//     const userName = localStorage.getItem('username');
//     if (userName) {
//       setDisplay('loginControls', 'none');
//       setDisplay('playControls', 'block');
//     } else {
//       setDisplay('loginControls', 'block');
//       setDisplay('playControls', 'none');
//     }
//   })();

document.addEventListener("DOMContentLoaded", function() {
    menu();
    // Call the updateSeedCounter function every few seconds (e.g., every 5 seconds)
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds
});

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

function donateSeeds() {
    const seedType = 'Seed Type'; // Retrieve seed type from the row if needed
    const seedQuantity = document.getElementById('seedQuantity1').value; // Get the selected quantity
    // Call a function to send the donation data to the server
    let username = localStorage.getItem("username");
    if (!username) {
        msgBanner('Please login to donate seeds.', true);
        return;
    }
    sendDonation(seedType, seedQuantity);
}

function sendDonation(seedType, seedQuantity) {
    // Make a fetch request to send donation data to the server
    fetch('/api/donate', {
        method: 'post',
        body: JSON.stringify({
            seedType: seedType,
            seedQuantity: seedQuantity
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then(response => {
        if (response.ok) {
            // Donation successful
            msgBanner('Thank you for your donation!');
            // You can update the UI to reflect the donation if needed
        } else {
            // Error handling for failed donation
            msgBanner('Failed to donate seeds. Please try again later.', true);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        msgBanner('Failed to donate seeds. Please try again later.', true);
    });
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