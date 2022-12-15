let slideNum = 0; // 0 to match with the slides index [i]

slideShow();

function slideShow() {
  let slides = document.querySelectorAll(".slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideNum++;

  if (slideNum > slides.length) {
    slideNum = 1;
  }

  let circles = document.querySelectorAll(".circle");

  for (let i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }

  slides[slideNum - 1].style.display = "block";
  circles[slideNum - 1].className += " active";
  setTimeout(slideShow, 2500);
}
