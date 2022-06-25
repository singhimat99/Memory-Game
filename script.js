"use strict";
const resetGame = document.querySelector(".resetGame");
let random;
let numbers = [];
function randomizeImages() {
  const images = document.querySelectorAll(".img");
  let unique = [];
  let i = 0;
  while (unique.length != 6) {
    random = Math.round(Math.random() * 5);
    numbers[i] = random;
    i++;
    unique = Array.from(new Set(numbers));
  }
  for (let j = 0; j < unique.length; j++) {
    if (images[j].src !== `img${unique[j] + 1}.png`) {
      //   console.log(images[j].src + " before");
      images[j].src = `img${unique[j] + 1}.png`;
      //   console.log(images[j].src);
    }
  }
  unique = [];
}
resetGame.addEventListener("click", randomizeImages);
