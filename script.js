const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

// Recupera a preferência salva.
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "dark") {
  ativarDarkMode();
}

function ativarDarkMode() {
  document.body.classList.add("dark");
  themeIcon.textContent = "☀";
  themeText.textContent = "Light mode";
  themeToggle.setAttribute("aria-label", "Ativar modo claro");
}

function ativarLightMode() {
  document.body.classList.remove("dark");
  themeIcon.textContent = "☾";
  themeText.textContent = "Dark mode";
  themeToggle.setAttribute("aria-label", "Ativar modo escuro");
}

themeToggle.addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");

  if (dark) {
    ativarDarkMode();
    localStorage.setItem("tema", "dark");
  } else {
    ativarLightMode();
    localStorage.setItem("tema", "light");
  }
});

// Apenas uma demonstração de interação nos botões de detalhes.
document.querySelectorAll(".details-button").forEach((button) => {
  button.addEventListener("click", () => {
    alert("Entre em contato para receber todos os detalhes deste veículo.");
  });
});
