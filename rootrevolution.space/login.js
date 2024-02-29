function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    const passEl = document.querySelector("#password");
    localStorage.setItem("userPassword", passEl.value);
    window.location.href = "play.html";
  }