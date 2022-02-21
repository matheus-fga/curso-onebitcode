const app = new App()

function addProperty(){
  window.addEventListener("submit", event => {
    event.preventDefault()
  })
  const property = new Array()
  const type = document.querySelector("select#type option:checked").text
  const area = document.getElementById('area').value
  const isRented = document.querySelector("input[name='is-rented']:checked").value
  property.push(type, area, isRented)
  app.createProperty(property)
  listProperties()
  clearForm()
}

function listProperties() {
  removeAllChild()
  const properties = app.getProperties
  properties.forEach((element, index) => {
    const newLi = document.createElement('li')
    const hidden = document.createElement('input')
    hidden.type = 'hidden'
    hidden.value = index
    newLi.appendChild(hidden)
    if(element.isRented == 'sim'){
      const newSpan = document.createElement('span')
      newSpan.innerText = 'ALUGADO'
      newSpan.style.backgroundColor = 'red'
      newSpan.classList.add('white-text')
      newLi.appendChild(newSpan)
    }
    const newContent = document.createTextNode(` Tipo: ${element.type} Area: ${element.area} `)
    const newButton = document.createElement('button')
    newButton.innerText = 'Remover'
    newButton.setAttribute('onclick', 'removePropertyOfList(this)')
    newLi.appendChild(newContent)
    newLi.appendChild(newButton)
    const list = document.getElementById('properties')
    list.append(newLi)
  })
}

function removePropertyOfList(element) {
  const li = element.parentNode
  app.removeProperty(li.querySelector("input").value)
  listProperties()
}

function removeAllChild() {
  const element = document.getElementById("properties");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function clearForm(){
  const area = document.getElementById('area').value = ""
  const isRented = document.querySelector("input[name='is-rented']").checked = false
}