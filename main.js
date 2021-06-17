"use strict";

addEventListener("load", () => {
  const form = document.querySelector("form");

  init();

  function init() {
    form.addEventListener("submit", submitHandler);
  }
});

function submitHandler(e) {
  e.preventDefault();
  const input = document.querySelector("input");
  if (input.value === "") {
    return;
  }
  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `
    <span>${input.value}</span><button class="check"><i class="fas fa-check"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button>
  `;
  const checkBtn = li.querySelector(".check");
  const deleteBtn = li.querySelector(".delete");
  checkBtn.addEventListener("click", () => {
    checkBtnHandler(li);
  });
  deleteBtn.addEventListener("click", () => {
    deleteBtnHandler(li);
  });
  const ul = document.querySelector(".items");
  ul.appendChild(li);
  input.value = "";
}

function checkBtnHandler(li) {
  const span = li.querySelector("span");
  if (span.className === "checked") {
    span.classList.remove("checked");
  } else {
    span.className = "checked";
  }
}

function deleteBtnHandler(li) {
  li.classList.add("remove");
  setTimeout(() => {
    li.remove();
  }, 400);
}
