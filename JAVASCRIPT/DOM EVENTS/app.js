let btns = document.querySelector('button');
let div = document.querySelector('div');
let hedding = document.querySelector('h1');
btns.onclick = setRandomColor;
function setRandomColor() {
  let rVal = Math.floor(Math.random() * 255 );
  let gVal = Math.floor(Math.random() * 255 );
  let bVal = Math.floor(Math.random() * 255 );

  div.style.backgroundColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
  hedding.innerText = `rgb(${rVal}, ${gVal}, ${bVal})`;
}
