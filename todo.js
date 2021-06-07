// const
const form = document.querySelector(".js-form");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

const TODOS_LS = "lists";

// run

init();

function init() {
  isTodo();
  form.addEventListener("submit", onSubmit);
}

//function

function isTodo() {
  todos = JSON.parse(localStorage.getItem(TODOS_LS));
  if (todos === null) {
    todos = [];
  } else {
    todos.forEach((a) => {
      let li = document.createElement("li");
      let span = document.createElement("span");
      span.innerText = a;
      let check = document.createElement("i");
      check.addEventListener("click", checkBtnHandler);
      check.classList.add("fas");
      check.classList.add("fa-check");
      let trash = document.createElement("i");
      trash.addEventListener("click", trashBtnHandler);
      trash.classList.add("fas");
      trash.classList.add("fa-trash-alt");
      li.appendChild(span);
      li.appendChild(check);
      li.appendChild(trash);
      ul.appendChild(li);
    });
  }
}

function onSubmit(event) {
  event.preventDefault();
  let data = input.value;
  todos.push(data);
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
  let li = document.createElement("li");
  let span = document.createElement("span");
  span.innerText = data;
  let check = document.createElement("i");
  check.addEventListener("click", checkBtnHandler);
  check.classList.add("fas");
  check.classList.add("fa-check");
  let trash = document.createElement("i");
  trash.addEventListener("click", trashBtnHandler);
  trash.classList.add("fas");
  trash.classList.add("fa-trash-alt");
  li.appendChild(span);
  li.appendChild(check);
  li.appendChild(trash);
  ul.appendChild(li);
  input.value = "";
}

function checkBtnHandler(e) {
  let target = e.target.parentNode.querySelector("span");
  if (target.className == "checked") {
    target.classList.remove("checked");
  } else {
    target.classList.add("checked");
  }
}

function trashBtnHandler(e) {
  let target = e.target.parentNode;
  let data = target.querySelector("span").innerText;
  todos.splice(todos.indexOf(data), 1);
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
  target.classList.add("del");
  setTimeout(() => {
    target.remove();
  }, 500);
}
