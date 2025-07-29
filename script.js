document.addEventListener("DOMContentLoaded", () => {
  /* NAV TOGGLE */
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
  });

  /* HEADER SHRINK */
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("header--scrolled", window.scrollY > 40);
  });

  /* QUIZ CARDS */
  const quizzes = [
    { title: "DBMS Quiz", icon: "🗄️" },
    { title: "Data Structures Quiz", icon: "📚" },
    { title: "Algorithms Quiz", icon: "⚙️" },
    { title: "Operating Systems Quiz", icon: "💻" },
    { title: "Computer Networks Quiz", icon: "🌐" },
  ];
  const carousel = document.getElementById("quiz-carousel");
  quizzes.forEach((q) => {
    const card = document.createElement("div");
    card.className = "quizcard";
    card.innerHTML = `
        <span class="quizcard__emoji">${q.icon}</span>
        <span class="quizcard__title">${q.title}</span>
      `;
    carousel.appendChild(card.cloneNode(true)); // first copy
  });
  // duplicate cards to ensure smooth looping (total 3* quizzes length)
  quizzes.forEach((q) => {
    const card = document.createElement("div");
    card.className = "quizcard";
    card.innerHTML = `
        <span class="quizcard__emoji">${q.icon}</span>
        <span class="quizcard__title">${q.title}</span>
      `;
    carousel.appendChild(card);
  });

  /* DOWNLOAD BTN FEEDBACK */
  const downloadBtns = document.querySelectorAll(".download-btn");
  downloadBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.textContent = "Downloading...";
      setTimeout(() => (btn.textContent = "Download for Android"), 4000);
    });
  });
});
