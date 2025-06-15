"use strict";
const text = [
  "LEARN",
  "CODE",
  "REPEAT.",
  "Focused on crafting responsive, well-structured websites. I’m fueled by curiosity, creativity, and a daily commitment to improving my skills. --",
];
const span = document.querySelectorAll(".span");
const cursor = document.querySelectorAll(".hero__cursor");
const description = document.querySelector(".hero__description");

function type(text, span, cursor = null, i = 0) {
  if (i < text.length) {
    span.textContent += text.charAt(i);
    setTimeout(() => type(text, span, cursor, i + 1), 100);
  }
}

function typeDescription(text, desc, i = 0) {
  if (i < text.length) {
    desc.textContent += text.charAt(i);
    setTimeout(() => typeDescription(text, desc, i + 1), 15);
  }
}
setTimeout(() => type(text[0], span[0], cursor[0]), 500);
setTimeout(() => type(text[1], span[1], cursor[1]), 1000);
setTimeout(() => type(text[2], span[2], cursor[2]), 1500);
setTimeout(() => typeDescription(text[3], description), 2300);

document.getElementById("email-card__button").addEventListener("click", function () {
  window.location.href = "mailto:seandequina3000@gmail.com";
});
