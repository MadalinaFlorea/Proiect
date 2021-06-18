//Modal Login
const signInHtml = `
<div>
    <img src="images/logo.png" class="logo" />
  </div>
  <h1>Login</h1>
  <form>
    <label for="email">Adresa de e-mail</label>
    <input type="text" id="email" placeholder="Introduceti e-mail" />
    <p id="email-validation-message"></p>
    <div class="wrapper">
      <label for="password">Parola</label>
      <input
        type="password"
        id="password"
        placeholder="Introduceti parola"
      />
      <i class="fas fa-eye" id="show-password"></i>
    </div>
    <input type="submit" id="submit-login" value="Conecteaza-te" />
  </form>
  <a href="#" onclick="switchModal()">Nu ai cont? Poti crea unul aici!</a>
`;

//Modal Sign-up
const signUpHtml = `
<div>
  <img src="images/logo.png" class="logo" />
</div>
<h1>Sign-up</h1>
<form>
  <label for="first-name">Prenume</label>
  <input type="text" id="first-name" placeholder="Introduceti prenumele" />
  <label for="last-name">Nume</label>
  <input type="text" id="last-name" placeholder="Introduceti numele" />
  <label for="email">Adresa de e-mail</label>
  <input type="text" id="email" placeholder="Introduceti e-mail" />
  <p id="email-validation-message"></p>
  <div class="wrapper">
    <label for="password">Parola</label>
    <input
      type="password"
      id="password"
      placeholder="Introduceti parola"
    />
    <i class="fas fa-eye" id="show-password"></i>
  </div>
  <p id="password-validation-message"></p>
  <input type="submit" id="submit-signup" value="Creeaza cont" />
</form>
<a href="#" onclick="switchModal()">Ai deja un cont? Conecteaza-te aici!</a>
`;
const modals = document.createElement("div");
modals.innerHTML = `
<div class="modal" style="display: none"><div class="modal-body">
<section class="left">
  <h1>Paws Pet Shop</h1>
  <p>Cumparaturi simple pentru labute fericite!</p>
  <button>Devino partener Paws</button>
</section>
<section class="right">
  ${signInHtml}
</section>
</div>
</div>
`;

document.body.appendChild(modals);
var modal = document.getElementsByClassName("modal")[0];
var button = document.getElementById("login");
var loginButton = document.getElementById("submit-login");
button.onclick = function () {
  modal.style.display = "block";
};
loginButton.onclick = function () {
  //@todo actually log in people.
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//Validation
const emailValidatorRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailValidationEvent = (event) => {
  const userInput = event.target.value;
  const loginMessage = document.getElementById("email-validation-message");
  loginMessage.setAttribute('class', '');
  if (emailValidatorRegex.test(userInput)) {
    loginMessage.innerHTML = "<i class=\"fas fa-check\"></i> Adresa introdusa este valida";
    loginMessage.classList.add("valid");
  }
  else {
    loginMessage.innerHTML = "<i class=\"fas fa-times\"></i> Adresa introdusa nu este valida";
    loginMessage.classList.add("invalid");
  }
};
document.getElementById("email").addEventListener('blur', emailValidationEvent);

const passwordValidatorRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const passwordValidatorEvent = (event) => {
  const userInput = event.target.value;
  const passwordMessage = document.getElementById("password-validation-message");
  passwordMessage.setAttribute('class','');
  if (passwordValidatorRegex.test(userInput)) {
    passwordMessage.innerHTML = "<i class=\"fas fa-check\"></i> Parola introdusa este valida";
    passwordMessage.classList.add("valid");
  }
  else {
    passwordMessage.innerHTML = "<i class=\"fas fa-times\"></i> Parola introdusa nu este valida! Folositi un caracter special, o cifra, o majuscula si minim 8 caractere";
    passwordMessage.classList.add("invalid");
  }
};
  

const showPasswordEvent = (e) => {
  const passwordInput = document.getElementById("password");
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  }
  else {
    passwordInput.setAttribute("type", "password");
  }
};
document.getElementById("show-password").addEventListener("click", showPasswordEvent);


function switchModal() {
  let currentModal = document.querySelector('.modal section.right h1');
  if (currentModal.innerHTML === 'Login') {
    currentModal.parentNode.innerHTML = signUpHtml;
    document.getElementById("password").addEventListener('blur', passwordValidatorEvent);
  } else {
    currentModal.parentNode.innerHTML = signInHtml;
  }
  document.getElementById("email").addEventListener('blur', emailValidationEvent);
  document.getElementById("show-password").addEventListener("click", showPasswordEvent);
}
