document.addEventListener("DOMContentLoaded", function() {
    menu();
    // Call the updateSeedCounter function every few seconds (e.g., every 5 seconds)
    setInterval(updateSeedCounter, 2000); // Update every 5 seconds
});

function errorMsg() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please fill out all fields or put N/A.";
    errorMessage.classList.add("banner-message");
    errorMessage.classList.add("error-message");
    errorMessage.classList.add("poppins-semibold");
    document.body.insertBefore(errorMessage, document.body.firstChild);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
}

// Register Control
async function createUser() {
    create(`/api/auth/create`);
}

async function create(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    const fullname = document.querySelector("#fullname")?.value;
    const email = document.querySelector("#email")?.value;
    const location = document.querySelector("#location")?.value;
    if (username.trim() === "" || password.trim() === "" || fullname.trim() === "" || email.trim() === "" || location.trim() === "" || username.trim() === "" || password.trim() === "") {
        errorMsgEmpty();
        return;
    }
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Adding 1 because months are zero-based
    const day = String(currentDate.getDate()).padStart(2, '0');
    const todayDate = `${year}-${month}-${day}`;
    const seedsdonated = 0;
    const seedsreceived = 0;
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({
            username: username,
            password: password,
            fullname: fullname,
            email: email,
            location: location,
            membersince: todayDate,
            seedsdonated: seedsdonated,
            seedsreceived: seedsreceived
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        localStorage.setItem("username", username);
        localStorage.setItem("registered", true);
        window.location.href = 'index.html';
    } else {
        errorMsgExisting();
    }
}

function errorMsgExisting() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Account already exists.";
    errorMessage.classList.add("banner-message");
    errorMessage.classList.add("error-message");
    errorMessage.classList.add("slide-in");
    errorMessage.classList.add("poppins-semibold");
    document.body.insertBefore(errorMessage, document.body.firstChild);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
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

function errorMsgEmpty() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Please enter all info.";
    errorMessage.classList.add("banner-message");
    errorMessage.classList.add("error-message");
    errorMessage.classList.add("slide-in");
    errorMessage.classList.add("poppins-semibold");
    document.body.insertBefore(errorMessage, document.body.firstChild);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
}