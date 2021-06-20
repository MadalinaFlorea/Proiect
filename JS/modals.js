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
    <p id="login-message"></p>
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
  <p id="login-message"></p>
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
<section class="right"></section>
</div>
</div>
`;

document.body.appendChild(modals);
let button = document.getElementById("login");
let modal = document.getElementsByClassName("modal")[0];

if (button !== null) {
  button.onclick = () => modal.style.display = "block";
}

window.onclick = e => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
};

//Validation
const emailValidationEvent = event => {
  const userInput = event.target.value;
  const loginMessage = document.getElementById("email-validation-message");
  loginMessage.setAttribute("class", "");
  if (emailValidatorRegex.test(userInput)) {
    loginMessage.innerHTML = '<i class="fas fa-check"></i> Adresa introdusa este valida';
    loginMessage.classList.add("valid");
  } else {
    loginMessage.innerHTML = '<i class="fas fa-times"></i> Adresa introdusa nu este valida';
    loginMessage.classList.add("invalid");
  }
};

const passwordValidatorEvent = event => {
  const userInput = event.target.value;
  const passwordMessage = document.getElementById("password-validation-message");
  passwordMessage.setAttribute("class", "");
  if (passwordValidatorRegex.test(userInput)) {
    passwordMessage.innerHTML = '<i class="fas fa-check"></i> Parola introdusa este valida';
    passwordMessage.classList.add("valid");
  } else {
    passwordMessage.innerHTML = '<i class="fas fa-times"></i> Parola introdusa nu este valida! Folositi un caracter special, o cifra, o majuscula si minim 8 caractere';
    passwordMessage.classList.add("invalid");
  }
};

const showPasswordEvent = () => {
  const passwordInput = document.getElementById("password");
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
  } else {
    passwordInput.setAttribute("type", "password");
  }
};

function switchModal() {
  let currentModal = document.querySelector(".modal section.right");
  if (currentModal.innerHTML === "" || currentModal.querySelector("h1").innerHTML === "Sign-up") {
    currentModal.innerHTML = signInHtml;
    let loginButton = document.getElementById("submit-login");
    loginButton.onclick = (event) => {
      event.preventDefault();
      const login = processLogin(event);
      const message = document.getElementById("login-message");
      message.setAttribute("class", "");
      if (typeof login === "string") {
        message.innerHTML = '<i class="fas fa-times"></i> ' + login;
        message.classList.add("invalid");
      } else {
        message.innerHTML =  '<i class="fas fa-check"></i> Bun venit, ' + login.first_name + " " + login.last_name;
        message.classList.add("valid")
        setTimeout(() => modal.style.display = "none", 2000);
      }
    };
  } else {
    currentModal.innerHTML = signUpHtml;
    let signUpButton = document.getElementById("submit-signup");
    document.getElementById("password").addEventListener("blur", passwordValidatorEvent);
    signUpButton.onclick = (event) => {
      event.preventDefault();
      const signup = processSignUp(event);
      const message = document.getElementById("login-message");
      message.setAttribute("class", "");
      if (typeof signup === "string") {
        message.innerHTML = '<i class="fas fa-times"></i> ' + signup;
        message.classList.add("invalid");
      } else {
        message.innerHTML =  '<i class="fas fa-check"></i> Bun venit, ' + signup.first_name + " " + signup.last_name;
        message.classList.add("valid")
        setTimeout(() => modal.style.display = "none", 2000);
      }
    }; 
  }
  document.getElementById("email").addEventListener("blur", emailValidationEvent);
  document.getElementById("show-password").addEventListener("click", showPasswordEvent);
}

switchModal();
