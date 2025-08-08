function initFormValidation() {
  const form = document.getElementById('signup-form');
  if (!form) return; // pas de formulaire, on sort

  const nameInput = form.elements["name"];
  const emailInput = form.elements["email"];
  const passwordInput = form.elements["password"];

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const formMessage = document.getElementById("form-message");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateName() {
    if (!nameInput.value.trim()) {
      nameError.textContent = "Le nom est obligatoire.";
      nameInput.classList.add("invalid");
      nameInput.classList.remove("valid");
      return false;
    }
    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");
    return true;
  }

  function validateEmail() {
    if (!emailInput.value.trim()) {
      emailError.textContent = "L’email est obligatoire.";
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      return false;
    }
    if (!isValidEmail(emailInput.value.trim())) {
      emailError.textContent = "Format d’email invalide.";
      emailInput.classList.add("invalid");
      emailInput.classList.remove("valid");
      return false;
    }
    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");
    return true;
  }

  function validatePassword() {
    if (!passwordInput.value) {
      passwordError.textContent = "Le mot de passe est obligatoire.";
      passwordInput.classList.add("invalid");
      passwordInput.classList.remove("valid");
      return false;
    }
    if (passwordInput.value.length < 6) {
      passwordError.textContent = "Le mot de passe doit contenir au moins 6 caractères.";
      passwordInput.classList.add("invalid");
      passwordInput.classList.remove("valid");
      return false;
    }
    passwordError.textContent = "";
    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");
    return true;
  }

  nameInput.addEventListener("input", validateName);
  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  form.addEventListener("submit", e => {
    e.preventDefault();
    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (validName && validEmail && validPassword) {
      formMessage.textContent = "Inscription réussie 🎉";
      formMessage.className = "form-message success";

      form.reset();
      [nameInput, emailInput, passwordInput].forEach(input => {
        input.classList.remove("valid");
      });
    } else {
      formMessage.textContent = "Merci de corriger les erreurs avant de soumettre.";
      formMessage.className = "form-message error";
    }
  });
}
