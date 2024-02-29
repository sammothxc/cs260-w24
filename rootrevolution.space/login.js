function login() {
    const nameEl = document.querySelector("#username");
    const passEl = document.querySelector("#password");
    if (nameEl.value.trim() === "" || passEl.value.trim() === "") {
        alert("Please fill out both username and password fields.");
        return;
    }
    localStorage.setItem("username", nameEl.value);
    localStorage.setItem("password", passEl.value);
    localStorage.setItem("show_msg", true);
    window.location.href = "index.html";
}