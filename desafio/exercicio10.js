
//Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const valueOne = Number(prompt('Digite o valor'))

if (valueOne%2 == 0) {  
     alert(`Não é um número ímpar`)
} 
else {
     alert(`É um número ímpar`)
}