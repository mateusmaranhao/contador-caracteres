window.addEventListener('load', start);

function start() {
  console.log('Aprendendo sobre eventos!')

  var textInput = document.querySelector('#textInput');
  textInput.addEventListener('keyup', countName)
}

function countName(event) {
  var count = event.target.value;

  var span = document.querySelector('#nameLength');
  span.textContent = `Total de caracteres: ${count.length}`;
}

function addClass() {
  textInput.addEventListener('focus', textInput.classList.add('onFocus'))
}
function removeClass() {
  textInput.addEventListener('blur', textInput.classList.remove('onFocus'))
}


