"use strict";
const reset = document.querySelector(".resetGame");
const images = document.querySelectorAll(".img");
const containers = document.querySelectorAll(".container");
let numbers = [];
let clicks = 0;
let check = [];

function randomize() {
  let unique = [];
  let i = 0;
  while (unique.length != 3) {
    let random = Math.round(Math.random() * 2);
    numbers[i] = random;
    i++;
    unique = Array.from(new Set(numbers));
  }
  return unique;
}

function reassignImages() {
  let unique = randomize();
  let arr2 = randomize();
  for (let i = 0; i < arr2.length; i++) {
    unique.push(arr2[i]);
  }
  for (let j = 0; j < unique.length; j++) {
    images[j].src = `img${unique[j] + 1}.png`;
    // if (images[j].src !== `img${unique[j] + 1}.png`) {
    //   images[j].src = `img${unique[j] + 1}.png`;
    //   console.log(images[j].src + " before");
    //   console.log(images[j].src);
  }
}

function hideImages() {
  for (let i = 0; i < images.length; i++) {
    images[i].style.visibility = "hidden";
  }
}

function revealImages(j) {
  if (images[j].style.visibility === "hidden") {
    images[j].style.visibility = "visible";
  }
}
function resetGame() {
  reassignImages();
  hideImages();
  clicks = 0;
  check = [];
}
resetGame();
reset.addEventListener("click", resetGame);

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function () {
    revealImages(i);
    clicks++;
    if (clicks <= 1) {
      check[0] = i;
    }
    if (clicks == 2) {
      check[1] = i;
      if (images[check[1]].src === images[check[0]].src) {
        setTimeout(function () {
          alert("You win!");
          resetGame();
        }, 100);
      } else {
        setTimeout(function () {
          alert("Try Again :(");
          hideImages();
        }, 100);
        clicks = 0;
      }
    }
  });
}

// function revealImage(i) {
//   if (images[i].style.visibility === "hidden") {
//     images[i].style.visibility = "visible";
//   } else {
//     images[i].style.visibility = "hidden";
//   }
// }
