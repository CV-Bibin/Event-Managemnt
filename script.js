
  const openLogin = document.getElementById("openLogin");
  const authModal = document.getElementById("authModal");
  const closeAuth = document.getElementById("closeAuth");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");
  const loginBox = document.getElementById("loginBox");
  const signupBox = document.getElementById("signupBox");

  openLogin.addEventListener("click", (e) => {
    e.preventDefault();
    authModal.classList.remove("hidden");
    loginBox.classList.remove("hidden");
    signupBox.classList.add("hidden");
  });

  closeAuth.addEventListener("click", () => authModal.classList.add("hidden"));

  window.addEventListener("click", (e) => {
    if (e.target === authModal) authModal.classList.add("hidden");
  });

  showSignup.addEventListener("click", (e) => {
    e.preventDefault();
    loginBox.classList.add("hidden");
    signupBox.classList.remove("hidden");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    signupBox.classList.add("hidden");
    loginBox.classList.remove("hidden");
  });

