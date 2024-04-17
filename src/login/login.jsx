import React from 'react';
import './login.css';

export function Login() {
    return (
        <main>
            <h1>Login</h1>
            <p>Login or register to donate and save your campaigns!</p>
            <div id="login" className="input-box">
                <input type="text" id="username" placeholder="Username" />
                <input type="password" id="password" placeholder="Password" />
                <button className="poppins-semibold" onClick={() => loginUser()}>Login</button>
            </div>
            <br />
            <div id="register-btn" className="register poppins-semibold">
                <p>Don't have an account?</p>
                <button className="poppins-semibold" onClick={() => register()}>Register</button>
            </div>
        </main>
    );
}

function register() {
    window.location.href = "register";
}

function errorMsgEmpty() {
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

function errorMsgIncorrect() {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Username or password is incorrect.";
    errorMessage.classList.add("banner-message");
    errorMessage.classList.add("error-message");
    errorMessage.classList.add("slide-in");
    errorMessage.classList.add("poppins-semibold");
    document.body.insertBefore(errorMessage, document.body.firstChild);
    setTimeout(() => {
        errorMessage.remove();
    }, 4000);
}

// Login Control
async function loginUser() {
    login(`/api/auth/login`);
}

async function login(endpoint) {
    const username = document.querySelector('#username')?.value;
    const password = document.querySelector('#password')?.value;
    if (username.trim() === "" || password.trim() === "") {
        errorMsgEmpty();
        return;
    }
    const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ username: username, password: password }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response.ok) {
        localStorage.setItem("username", username);
        localStorage.setItem("registrationMessageDisplayed", "true");
        window.location.href = 'index';
    } else {
        const body = await response.json();
        errorMsgIncorrect();
    }
}

async function getUser(username) {
    // See if we have a user with the given email.
    const response = await fetch(`/api/user/${username}`);
    if (response.status === 200) {
        return response.json();
    }
    return null;
}
