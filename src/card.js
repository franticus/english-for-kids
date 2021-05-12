import { audioAll } from "./audio";
import { listInfo } from "./data";

let count = 0;

class CardMain {
  constructor(img, text, trans, elem, sound) {
    this.flipped = false;
    this.img = img;
    this.text = text;
    this.trans = trans;
    this.elem = elem;
    this.sound = sound;
    this.setCardValues();
  }

  /**
   * Set card image and card text
   */
  setCardValues = () => {
    this.elem.children[0].style.background = `url(${this.img})`;
    this.elem.children[0].style.backgroundSize = `cover`;
    this.elem.children[0].children[0].children[1].innerHTML = this.text;
    this.elem.children[0].children[1].children[1].innerHTML = this.trans;

    this.elem.onmouseout = () => {
      this.flipOut();
    };
    this.elem.children[0].children[0].children[1].onclick = () => {
      this.flip();
    };
  };
  /**
   * Flip card by click
   */

  flip = () => {
    let wordsArrayHide = document.querySelector(".wordsArrayHide");
    const randomWord = document.querySelector(".word-board");
    const currPage = document.querySelector(".curr-page");
    const mode = document.getElementById("checkbox");
    const scoreBoard = document.querySelector(".score-board");
    const title = document.querySelector(".title");

    if (!mode.checked) {
      if (currPage.innerText !== "Main page") {
        let audio = new Audio();
        audio.preload = "auto";
        audio.src = this.sound;
        audio.play();

        this.elem.children[0].classList.toggle("fliped");
      }
    } else if (mode.checked) {
      if (this.text === randomWord.innerHTML) {
        randomWord.innerHTML = wordsArrayHide.innerHTML.split(",")[++count];
        console.log(wordsArrayHide.innerHTML.split(",")[count]);
        this.elem.style.opacity = 0.3;
        scoreBoard.innerHTML += `&#9996;`;
        let audio = new Audio();
        audio.preload = "auto";
        audio.src = audioAll.voice73;
        audio.play();
      } else if (this.text !== randomWord.innerHTML) {
        scoreBoard.innerHTML += `&#10060;`;
        let audio = new Audio();
        audio.preload = "auto";
        audio.src = audioAll.voice74;
        audio.play();
      }
      if (count === 8) {
        if (scoreBoard.innerHTML.split("").length === 8) {
          title.innerHTML = "Main page";
          title.style.color = 'white';

          randomWord.innerHTML = "Отличный результат!";
          let audio = new Audio();
          audio.preload = "auto";
          audio.src = audioAll.voice76;
          audio.play();
        } else if (scoreBoard.innerHTML.split("").length > 8) {
          title.innerHTML = "Main page";
          title.style.color = 'white';

          randomWord.innerHTML = "Нужно ещё немного повторить!";
          let audio = new Audio();
          audio.preload = "auto";
          audio.src = audioAll.voice75;
          audio.play();
        }
      }
      if ("speechSynthesis" in window)
        window.speechSynthesis.speak(
          new SpeechSynthesisUtterance(randomWord.innerHTML)
        );
    }
  };
  flipOut = () => {
    const mode = document.getElementById("checkbox");
    if (!mode.checked) {
      const currPage = document.querySelector(".curr-page");
      if (currPage.innerText !== "Main page") {
        this.elem.children[0].classList.remove("fliped");
      }
    }
  };
}

export default CardMain;
