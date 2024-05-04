//Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const valueOne = Number(prompt('Digite o valor'))

if (valueOne%2 == 0) {  
     alert(`Valor digitado: ${valueOne} é um valor PAR`)
} 
else {
     alert(`Valor digitado: ${valueOne} não é PAR`)
}