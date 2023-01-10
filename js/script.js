let container = document.createElement('div')
container.classList.add('container')

let divRow = document.createElement('div')
container.classList.add('row')

let inputText = document.createElement("input");
inputText.classList.add('form-control')
inputText.classList.add('mt-5')
inputText.classList.add('col-6')

document.body.appendChild(container);
container.appendChild(divRow);
divRow.appendChild(inputText);

inputText.addEventListener("keypress", KeyUp);

function KeyUp() {
  let regExe = /^[a-zA-Z]+$/.test(inputText.value);
  if (!regExe) {
    inputText.value = inputText.value.replace(/[0-9]/g, "");
  } else {
    let texte = document.createElement("p");
    texte.innerHTML = inputText.value;
    texte.style.display = "inline-Block";
    document.body.appendChild(texte);
  }
}
