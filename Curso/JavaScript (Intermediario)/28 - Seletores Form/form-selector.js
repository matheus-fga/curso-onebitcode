function showInfo() {
  const name = document.querySelector("input[name='name']").value
  const favoriteColor = document.querySelector("select[name='color'] option:checked").text
  const likeProgramming = document.querySelector("input[name='like-programming']:checked").value
  const developerOptions = document.querySelectorAll("input[name='developer-options']:checked")
  let options = new Array()
  developerOptions.forEach(element => options.push(element.value))
  let optionsChecked = options.join(', ')
  alert(`Nome: ${name}\nCor: ${favoriteColor}\nGosta de programar? ${likeProgramming}\nConhecimentos: ${optionsChecked}`)
}