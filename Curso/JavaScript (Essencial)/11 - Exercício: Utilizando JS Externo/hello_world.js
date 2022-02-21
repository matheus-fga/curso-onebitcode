alert("Bem-vindo! A seguir pediremos que informe alguns dados.")

let namePerson1 = prompt("Pessoa 1. Informe seu nome:")

let agePerson1 = prompt("Pessoa 1. Informe sua idade:")

let namePerson2 = prompt("Pessoa 2. Informe seu nome:")

let agePerson2 = prompt("Pessoa 2. Informe sua idade:")

let ageDifference = 0

if (agePerson1 >= agePerson2){
  ageDifference = agePerson1 - agePerson2
  alert("O nome da Pessoa mais velha é: " +namePerson1+ ". E sua idade é: " +agePerson1+
        "\nO nome da Pessoa mais nova é: " +namePerson2+ ". E sua idade é: " +agePerson2+
        "\nA diferença de idade é: " +ageDifference)
} else {
  ageDifference = agePerson2 - agePerson1
  alert("O nome da Pessoa mais velha é: " +namePerson2+ ". E sua idade é: " +agePerson2+
        "\nO nome da Pessoa mais nova é: " +namePerson1+ ". E sua idade é: " +agePerson1+
        "\nA diferença de idade é: " +ageDifference)
}