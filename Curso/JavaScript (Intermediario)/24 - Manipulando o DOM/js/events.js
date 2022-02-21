function addPhone() {
  const phoneList = document.querySelector('form#phones')
  const newPhone = phoneList.children[0].cloneNode(true)
  const phonePos = phoneList.children.length + 1
  newPhone.querySelector('label').innerText = `Telefone ${phonePos}:`
  phoneList.append(newPhone)
}

function printPhones() {
  let msg = new String()
  const phoneList = document.querySelectorAll('form#phones input[name = phone]')
  phoneList.forEach((element, index) => {
    msg += `Telefone ${index + 1}: ${element.value}\n`
  });
  alert(msg)
}