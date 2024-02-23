const text1_options = [
  "Small bb jp",
  "Ika'y iingatan ko at aalagaan ko",
  "HaHaHaHaHaHa",
  "Pipiliin ka sa araw-araw",
  "SM na laging traffic",
  "kape kape kape kape",
  "jp time",
];
const text2_options = [
  "4 years old",
  "Paninindigan Kita - Ben&Ben",
  "Condo ni dex",
  "Araw-Araw - Ben&Ben",
  "SM Bacoor",
  "Starbucks Tagaytay",
  "National Museum",
];
const color_options = ["#EBB9D2", "#FE9968", "#7FE0EB", "#6CE5B1"];
const image_options = [
  "https://valenzuelajp.github.io/babyjp.jpg",
  "images/paninindigan.png",
  "https://valenzuelajp.github.io/condo.JPG",
  "images/araw.png",
  "images/sm.jpg",
  "images/jpsb.jpg",
  "images/jp.jpg",
];
var i = 0;
const currentOptionText1 = document.getElementById("current-option-text1");
const currentOptionText2 = document.getElementById("current-option-text2");
const currentOptionImage = document.getElementById("image");
const carousel = document.getElementById("carousel-wrapper");
const mainMenu = document.getElementById("menu");
const optionPrevious = document.getElementById("previous-option");
const optionNext = document.getElementById("next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};


function actionToggle() {
  const action = document.querySelector('.action');
  action.classList.toggle('active')
}