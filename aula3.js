//Terceira aula de JavaScript

//cadeia alimentar
let base = "Planta"; 
let herbivoro = "Coelho"; 
let carnivoro = "Lince"; 
let cadeiaAlimentar = "Na base da cadeia alimentar temos a " + base + ", que é comida pelo " + herbivoro + ", que por sua vez é comida pelo " + carnivoro + ".";
console.log(cadeiaAlimentar);

//numero maior
let num1 = 11;
let num2 = 9;

if (num1 > num2){
  console.log("O número maior é o num1: " + num1);
} else {
  console.log("O número maior é o num2: " + num2);
}

//atribuindo valor a variavel
let nome = prompt("qual seu nome?");
console.log("Olá, " + nome + "!");

//testando laço de repetição
for(let x = 0; x < 11 ; x++){
  console.log("O valor de x é: " + x);
}

//contando caractere
let frase = prompt("Insira uma palavra!");
let quantidadeDeCaracteres = frase.length;  
console.log("A palavra tem " + quantidadeDeCaracteres + " caracteres.");

//numero impar/ par com for
for(let x = 1; x < 101 ; x++){
  if (x % 2 === 0) {
  console.log("O número " + x + " é par.");
} else {
  console.log("O número " + x + " é ímpar.");
}
}

// com do while 
let num = 0;
do{
  num++;
   if (num % 2 === 0) {
  console.log("O número " + num + " é par.");
  } else {
  console.log("O número " + num + " é ímpar.");
}
} while (num < 101);