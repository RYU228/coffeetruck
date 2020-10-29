const popularUl = document.querySelector(".popular_ul");
const allUl = document.querySelector(".all_ul");
const optionsItems = document.querySelector(".options_items");
const optionsContent = document.querySelector(".options_content");
let selectedMenuLi;
let selectedMenu;
const changedMenu = dataMenu.slice();

function addOptions(text) {
  const span = document.createElement("span");
  const input = document.createElement("input");
  const label = document.createElement("label");

  input.type = "checkbox";
  input.value = text;
  label.innerText = text;
  input.classList.add("options_checkbox");

  span.appendChild(input);
  span.appendChild(label);
  optionsContent.appendChild(span);
}

function handleSelectMenu(event) {
  while (optionsContent.hasChildNodes()) {
    optionsContent.removeChild(optionsContent.firstChild);
  }
  event.target.style.border = "3px solid blue";

  if (selectedMenuLi != null) {
    selectedMenuLi.style.border = "none";
  }

  optionsItems.classList.remove("hidden");
  if (event.target === selectedMenuLi) {
    optionsItems.classList.add("hidden");
    selectedMenuLi = null;
    selectedMenu = "";
  } else {
    selectedMenuLi = event.target;
    selectedMenu = selectedMenuLi.innerText;
  }

  const value = event.target.value;

  for (let i = 0; i < changedMenu[value].options.length; i++) {
    addOptions(changedMenu[value].options[i]);
  }
}

function template(className, text, ul, value) {
  const li = document.createElement("li");
  li.value = value;
  li.classList.add(className);
  li.innerText = text;

  ul.appendChild(li);
}

function sortPopularMenu() {
  changedMenu.sort((a, b) => {
    if (a.orderCount > b.orderCount) {
      return -1;
    }
    if (a.orderCount < b.orderCount) {
      return 1;
    }
    return 0;
  });
}

function switchMenu() {
  const popularLi = document.getElementsByClassName("popular_li");
  for (let i = 0; i < 6; i++) {
    popularLi[i].innerText = changedMenu[i].menu;
  }
}

function init() {
  sortPopularMenu();
  for (let i = 0; i < 6; i++) {
    template("popular_li", dataMenu[i].menu, popularUl, i);
  }

  const popularLi = document.getElementsByClassName("popular_li");
  for (let i = 0; i < popularLi.length; i++) {
    popularLi[i].addEventListener("click", handleSelectMenu);
  }

  for (let i = 0; i < dataMenu.length; i++) {
    template("all_li", dataMenu[i].menu, allUl, i);
  }

  const allLi = document.getElementsByClassName("all_li");
  for (let i = 0; i < allLi.length; i++) {
    allLi[i].addEventListener("click", handleSelectMenu);
  }
}

init();

// popularLi.forEach(element => {
//     element.addEventListener("click", handleSelectMenu);
// });
