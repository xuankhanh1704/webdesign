let slideIndex = 1;
const slides = document.getElementsByClassName("slide");

function showSlides() {
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  slideIndex++;
}
setInterval(showSlides, 2000);