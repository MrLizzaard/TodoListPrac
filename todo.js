"use strict";

let lists = document.getElementById("UL");
const CloseBox = document.getElementsByClassName("closed");

function ClickAdd() {
  let textVal = document.getElementById("Input");
  if (textVal.value === "") {
    alert("you have to write something");
  } else {
    let ul = document.getElementById("UL");
    let li = document.createElement("li");

    let closebox = document.createElement('span');
    let txt = document.createTextNode("\u00D7");
    closebox.className = 'closed';
    closebox.appendChild(txt);
    


    li.appendChild(document.createTextNode(textVal.value));
    li.appendChild(closebox);
    ul.appendChild(li);
    textVal.value = "";
    for(let i = 0; i < CloseBox.length; i++){
      CloseBox[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
}

lists.addEventListener('click', function(event) {
  if(event.target.className ===''){
    event.target.className = "checked";
  }
  else{
    event.target.className = '';
  }
});

for(let i = 0; i<lists.querySelectorAll('li').length; i++){
  let closebox = document.createElement('span');
  let txt = document.createTextNode("\u00D7");
  closebox.className = 'closed';
  closebox.appendChild(txt);
  lists.querySelectorAll('li')[i].appendChild(closebox);
}


for(let i = 0; i < CloseBox.length; i++){
  CloseBox[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
