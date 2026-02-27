function theme_toggle() {
  var theme = document.body;
  theme.classList.toggle("light-mode");

  var button = document.getElementById("theme-button");
  if (button.innerHTML=="dark") {
    button.innerHTML="light";
  } else {
    button.innerHTML="dark";
  }
}