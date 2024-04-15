// note:Selectors
let firstLangMenu = document.getElementById("first-lang");
let firstDropMenu = document.getElementById("first-lang-drop-menu");
let firstDropMenuList = document.querySelectorAll(".first-lang-drop-menu li");
let secondDropMenu = document.getElementById("lang-en-drop-menu");
let secondLangMenu = document.getElementById("lang-en");
let secondDropMenuList = document.querySelectorAll(".lang-en-drop-menu  li");

// note:Access to all events
document.addEventListener("DOMContentLoaded", runToAloneEvents);
document.addEventListener("DOMContentLoaded", runToManyEvents);

//note:Run to Alone Events
function runToAloneEvents() {
  firstLangMenu.addEventListener("click", showLangMenu);
  secondLangMenu.addEventListener("click", showSecondLangMenu);
}
// note:Run to Many Events
function runToManyEvents() {
  // ? first dropmenu lang
  firstDropMenuList.forEach((item) =>
    item.addEventListener("click", changeLang)
  );
  // ? second dropmenu lang
  secondDropMenuList.forEach((item) =>
    item.addEventListener("click", changeSecondDropMenuLang)
  );
}

//note:Show First Dropmenu
function showLangMenu(e) {
  if (e.target) {
    firstDropMenu.classList.toggle("showMenu");
  }
}

// note:Show Second Dropmenu
function showSecondLangMenu(e) {
  if (e.target) {
    secondDropMenu.classList.toggle("second-showMenu");
  }
}
// note:Change first dropmmenu Lang
function changeLang(e) {
  if (e.target) {
    firstLangMenu.children[1].textContent = e.target.innerText;
  }
}
// note:Change second dropmmenu Lang
function changeSecondDropMenuLang(e) {
  secondLangMenu.children[1].textContent = e.target.innerText;
}
