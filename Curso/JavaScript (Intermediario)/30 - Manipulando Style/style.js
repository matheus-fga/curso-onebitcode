function setBlueBackground() {
  document.getElementById('style-text').style.backgroundColor = 'blue'
}

function setTransparentBackground() {
  document.getElementById('style-text').style.backgroundColor = 'transparent'
}

function setcolorRed() {
  document.getElementById('style-text').classList.add('red-text')
}

function removeRedColor() {
  document.getElementById('style-text').classList.remove('red-text')
}