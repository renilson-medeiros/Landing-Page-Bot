// ScroolReveal
// ---------------
const sr = ScrollReveal({
    distance: "25px",
    duration: 2000,
  });

  ScrollReveal().reveal(".logo", { delay: 150, origin: "left" });
  ScrollReveal().reveal(".navbar", { delay: 150, origin: "right" });
  ScrollReveal().reveal(".navbar-hamburger", { delay: 150, origin: "right" });
  ScrollReveal().reveal(".intro-reveal", { delay: 200, interval: "200", origin: "top" });
  ScrollReveal().reveal(".primary-image", { delay: 200, origin: "right" }); 
  ScrollReveal().reveal(".customers", { delay: 250, origin: "top" });
  ScrollReveal().reveal(".customers-image", { delay: 250, interval: "300", origin: "top" });
  ScrollReveal().reveal(".footer-content", { delay: 300, origin: "bottom" });

// Navbar Mobile
// ---------------
const hamburger = document.querySelector(".navbar-hamburger");
const navNavbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navNavbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navNavbar.classList.remove("active");
}))

// Navegation
// ---------------
document.querySelectorAll('[wm-link]').forEach(link => {
  const conteudo = document.getElementById('content')
  
  link.onclick = function(e) {
      e.preventDefault()
      fetch(link.getAttribute('wm-link'))
          .then(resp => resp.text())
          .then(html => conteudo.innerHTML = html)
  }
})

// Desenvolvido por Renilson Medeiros [Malcoon] - Dezembro 2021

    // Twitter: @malcoon_
    // Instagram: @_malcoon
    // Github: github.com/malcoon