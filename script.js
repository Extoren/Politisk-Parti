const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("nav-active");
});


function showFullscreenImage() {
  document.getElementById("fullscreenImage").style.display = "flex";
}

function hideFullscreenImage() {
  document.getElementById("fullscreenImage").style.display = "none";
}