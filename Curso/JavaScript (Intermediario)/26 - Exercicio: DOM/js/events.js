function addNewAddress() {
  const addressesValues = document.querySelectorAll('form#address input')
  const newLi = document.createElement('li')
  const newContent = document.createTextNode(`Cidade: ${addressesValues[2].value} Bairro: ${addressesValues[1].value} Numero: ${addressesValues[0].value} `)
  const newButton = document.createElement('button')
  newButton.innerText = 'Remover'
  newButton.setAttribute('onclick', 'removeAddress(this)')
  newLi.appendChild(newContent)
  newLi.appendChild(newButton)
  const list = document.getElementById('addresses')
  list.append(newLi)
}

function removeAddress(element) {
  const li = element.parentNode
  li.parentNode.removeChild(li);
}