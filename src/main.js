import "../style.scss";
import { listInfo } from "./data";

import CardMain from "./card";

// Burger //
const burger = document.getElementById("menu__toggle");
const nav = document.querySelector(".navcontainer");
const menuBg = document.querySelector(".menu-bg");
const randomWord = document.querySelector(".word-board");
const currPage = document.querySelector(".curr-page");
const modeHide = document.querySelector(".mode-hide");

modeHide.onclick = () => {
  alert("Choose Category!");
};

let wordsForPlay = [];

burger.onclick = function () {
  if (burger.checked) {
    burger.checked = false;
    nav.classList.toggle("navopen");
    menuBg.style.display = "block";
  } else {
    burger.checked = true;
    nav.classList.toggle("navopen");
    menuBg.style.display = "none";
  }
};

menuBg.onclick = function () {
  nav.classList.toggle("navopen");
  menuBg.style.display = "none";
  burger.checked = false;
};

const shuffle = (arr) => {
  return arr.sort(() => Math.random() - 0.5);
};

// Checkbox
const modeTitle = document.querySelector(".mode-title");
const mode = document.querySelector("#checkbox");
const scoreBoard = document.querySelector(".score-board");

mode.onclick = function () {
  if (mode.checked) {
    document.querySelectorAll(".bottom").forEach((n) => (n.style.opacity = 0));
    mode.removeAttribute("checked", "");
    modeTitle.innerHTML = "Play";
    scoreBoard.style.display = "block"; //!!!!!!!!!!!!!!!!!!!!!!!!!
    document.querySelector(".word-board").style.display = "block"; //!!!!!!!!!!!!!!!!!!!!!
    if ("speechSynthesis" in window)
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(randomWord.innerHTML)
      );
  } else {
    document.querySelectorAll(".bottom").forEach((n) => (n.style.opacity = 1));
    mode.setAttribute("checked", "");
    modeTitle.innerHTML = "Train";
    scoreBoard.innerHTML = "";
    
    scoreBoard.style.display = "none";
    document.querySelector(".word-board").style.display = "none"; //!!!!!!!!!!!!!!!!!!!!!!
    document
      .querySelectorAll(".flip-card")
      .forEach((e) => (e.style.opacity = 1));
  }
};

//!!!!!!!!!!!!!!!!!!!!!  Play Mode !!!!!!!!!!!!!!!!!!!!!!!!!

const word = document.querySelector(".bottom");
let randomWordArray = [];
const bottomArray = [];

randomWord.onclick = () => {
  if (currPage.innerText !== "Main page") {
    if ("speechSynthesis" in window)
      window.speechSynthesis.speak(
        new SpeechSynthesisUtterance(randomWord.innerHTML)
      );
  }
};

// for (let i = 0; i < 8; i++) {
//   bottomArray.push(listInfo[2][i].text);
// }
// for (let i = 0; i < 8; i++) {
//   randomWordArray.push(listInfo[2][i].text);
// }
// randomWordArray.sort();

// for (let i = 0; i < 8; i++) {
//   if (i === 0) {
//     randomWord.innerHTML = randomWordArray[i];
//   }
// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const cardList = [];

const createCardsLayout = (info) => {
  const cards = [];
  for (let i = 1; i < 10; i++) {
    cards[i - 1] = document.getElementById(`${i}`);
  }
  cards.forEach((e, i) => {
    cardList[i] = new CardMain(
      info[i].img,
      info[i].text,
      info[i].trans,
      e,
      info[i].sound
    );
  });
  return cardList;
};

const tabs = document.querySelector(".navcontainer");
const removeFlip = function () {
  document
    .querySelectorAll(".flip-card .fliped")
    .forEach((n) => n.classList.remove("fliped"));
};

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const title = document.querySelector(".title");
title.onclick = () => {
  location.reload();
  // currPage.innerText = "Main page";
  // removeFlip();
  // createCardsLayout(listInfo[0]);
  // mode.setAttribute("checked", "");
  // document.querySelectorAll(".flip-card").forEach((e) => (e.style.opacity = 1));
  // document.querySelectorAll(".bottom").forEach((n) => (n.style.opacity = 1));
};

tabs.onclick = (event) => {
  nav.classList.toggle("navopen");
  menuBg.style.display = "none";
  burger.checked = false;
  switch (event.target.innerText) {
    case "Main page":
      location.reload();

      // currPage.innerText = "Main page";
      // removeFlip();
      // createCardsLayout(listInfo[0]);
      // wordsArrayHide.innerHTML = "";
      // document
      //   .querySelectorAll(".flip-card")
      //   .forEach((e) => (e.style.opacity = 1));

      break;
    case "Actions (set A)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[1][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Actions (set A)";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[1]);
      break;
    case "Actions (set B)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[2][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Actions (set B)";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[2]);
      break;
    case "Animals (set A)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[3][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Animals (set A)";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[3]);
      break;
    case "Animals (set B)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[4][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Animals (set B)";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[4]);
      break;
    case "Clothes":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[5][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Clothes";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[5]);
      break;
    case "Emotions":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[6][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Emotions";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[6]);
      break;
    case "Adjective":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[7][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Adjective";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[7]);
      break;
    case "Actions (set C)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[8][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      currPage.innerText = "Actions (set C)";
      modeHide.style.display = "none";
      removeFlip();
      createCardsLayout(listInfo[8]);
      break;
    default:
      break;
  }
};

const section = document.querySelector(".container");
let wordsArrayHide = document.querySelector(".wordsArrayHide");
wordsArrayHide.innerHTML = [];

section.onclick = (event) => {
  switch (event.target.innerText) {
    case "Main page":
      currPage.innerText = "Main page";
      createCardsLayout(listInfo[0]);
      wordsArrayHide.innerHTML = [];
      document
        .querySelectorAll(".flip-card")
        .forEach((e) => (e.style.opacity = 1));

      break;
    case "Actions (set A)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[1][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";

      currPage.innerText = "Actions (set A)";
      createCardsLayout(listInfo[1]);
      break;
    case "Actions (set B)":
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[2][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";

      currPage.innerText = "Actions (set B)";
      createCardsLayout(listInfo[2]);
      break;
    case "Animals (set A)":
      currPage.innerText = "Animals (set A)";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[3][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[3]);
      break;
    case "Animals (set B)":
      currPage.innerText = "Animals (set B)";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[4][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[4]);
      break;
    case "Clothes":
      currPage.innerText = "Clothes";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[5][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[5]);
      break;
    case "Emotions":
      currPage.innerText = "Emotions";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[6][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[6]);
      break;
    case "Adjective":
      currPage.innerText = "Adjective";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[7][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[7]);
      break;
    case "Actions (set C)":
      currPage.innerText = "Actions (set C)";
      for (let i = 0; i < 8; i++) {
        randomWordArray.push(listInfo[8][i].text);
      }
      randomWordArray = shuffle(randomWordArray);
      wordsArrayHide.innerHTML = randomWordArray;
      randomWord.innerHTML = randomWordArray[0];
      modeHide.style.display = "none";
      createCardsLayout(listInfo[8]);
      break;
    default:
      break;
  }
};

// const playStepGame = () => {
//   randomWord.innerHTML = wordsForPlay[0];
// }

createCardsLayout(listInfo[0]);
