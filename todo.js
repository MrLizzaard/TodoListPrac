"use strict";

const lists = document.getElementById("UL").querySelectorAll('li');
const listlength = lists.length;
const CB = document.getElementsByClassName("closed");

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
    listlength++;
  }
}

for(let i =0; i<listlength; i++){
  lists[i].addEventListener('click', function() {
    if(lists[i].className == ''){
      lists[i].className = 'checked';
    }
    else{
      lists[i].className = '';
    }
  })
}

for(let i = 0; i<lists.length; i++){
  let closebox = document.createElement('span');
  let txt = document.createTextNode("\u00D7");
  closebox.className = 'closed';
  closebox.appendChild(txt);
  lists[i].appendChild(closebox);
}


for(let i = 0; i < CB.length; i++){
  CB[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
