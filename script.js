// ===== Hamburger menu =====
const toggleButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.classList.toggle("open");
});

// ===== Theme switching =====
const themeButtons = document.querySelectorAll(".menu button");
const themes = ["white", "dark", "darkblue", "bordeaux", "lilac"];

themeButtons.forEach(button => {
  button.addEventListener("click", () => {
    const selectedTheme = button.dataset.theme;

    themes.forEach(theme => document.body.classList.remove(theme));
    document.body.classList.add(selectedTheme);

    menu.classList.remove("open");
  });
});

// ===== Reading Tracker Logic =====
const currentPageEl = document.querySelector(".current-page");
const totalPagesEl = document.querySelector(".total-pages");
const progressFill = document.querySelector(".progress-fill");

const addOneBtn = document.getElementById("add-one-page");
const addFiveBtn = document.getElementById("add-five-pages");
const addTenBtn = document.getElementById("add-ten-pages");

let currentPage = 0;
const totalPages = parseInt(totalPagesEl.textContent, 10);

// update UI
function updateProgress() {
  currentPageEl.textContent = currentPage;

  const percentage = (currentPage / totalPages) * 100;
  progressFill.style.width = `${percentage}%`;
}

// button handlers
addOneBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage += 1;
    updateProgress();
  }
});

addFiveBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage = Math.min(currentPage + 5, totalPages);
    updateProgress();
  }
});

addTenBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage = Math.min(currentPage + 10, totalPages);
    updateProgress();
  }
});

// init on load
updateProgress();
