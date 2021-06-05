var modal = document.getElementsByClassName("pop-up")[0];
var button = document.getElementById("login");
var loginButton = document.getElementById("submit-modal");
button.onclick = function () {
  modal.style.display = "flex";
};
loginButton.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
