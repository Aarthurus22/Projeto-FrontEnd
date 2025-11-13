const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

function updateThemeIcon() {
  if (body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="bi bi-sun-fill" style="color:#FFA700;"></i>';
  } else {
    themeToggle.innerHTML = '<i class="bi bi-moon-stars"></i>';
  }
}

// Verifica preferência salva
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  updateThemeIcon();
});
document.addEventListener('DOMContentLoaded', function () {
  new Splide('#splide-processadores', {
    type: 'slide',
    perPage: 4,      // 4 cards por vez
    perMove: 1,      // Avança 1 card por clique
    gap: '1rem',
    breakpoints: {
      991: { perPage: 2 },
      576: { perPage: 1 }
    },
    arrows: true,
    pagination: false,
    drag: 'free',
    keyboard: true,
  }).mount();
});

new Splide('#splide-placamae', {
  type: 'slide',
  perPage: 4,
  perMove: 1,
  gap: '1rem',
  breakpoints: {
    991: { perPage: 2 },
    576: { perPage: 1 }
  },
  arrows: true,
  pagination: false,
  drag: 'free',
  keyboard: true,
}).mount();

new Splide('#splide-gpu', {
  type: 'slide',
  perPage: 4,
  perMove: 1,
  gap: '1rem',
  breakpoints: {
    991: { perPage: 2 },
    576: { perPage: 1 }
  },
  arrows: true,
  pagination: false,
  drag: 'free',
  keyboard: true,
}).mount();
