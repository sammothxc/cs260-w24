function login() {
    const nameEl = document.querySelector("#username");
    const passEl = document.querySelector("#password");
    if (nameEl.value.trim() === "" || passEl.value.trim() === "") {
        alert("Please fill out both username and password fields.");
        return;
    }
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("userPassword", passEl.value);
    window.location.href = "index.html";
}