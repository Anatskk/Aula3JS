
var vetor=[ ] , vetor2 = [ ];
let pessoa = 0, computador = 0;

console.log("Bem vindo ao jogo da MOEDA :) \n O computador vai jogar contra você!");
let escolhaMoeda = (prompt("Seleciole quantas moedas vai querer no jogo de 1 a 5"));

for(let i = 0; i < escolhaMoeda ; i++){
vetor2[i] = (prompt("Selecione seu palpite 1-Coroa , 2-Cara"));
}

while (escolhaMoeda < 1 || escolhaMoeda > 5) {

    escolhaMoeda = parseInt(prompt("Número de moedas inválido, selecione um número entre 1 e 5"));
}

function girarMoeda(){
for(let x = 0 ; x < escolhaMoeda; x++ ){
    vetor[x] = Math.random( ) < 0.5 ? 1 : 2;
}
return girarMoeda;
}

girarMoeda;

for(let i = 0; i < escolhaMoeda ; i++){
    if(vetor[i] == null){
        vetor[i] = console.log("Moeda n", i + 1 , "não foi rolado");
    } else if(vetor[i] > 2){
        console.log("Rolou CARA");
    } else { 
    console.log("Rolou COROA");     
    }

    if(vetor[i] == vetor2[i]){
        console.log("Você acertou a jogada n", i+1);
        pessoa++;
    } else {
        console.log("Você errou a jogada n", i+1);
        computador++;
    }     

}

if(pessoa > computador){
    console.log("PARABENS CAMARADA!! você ganhou do computador com a pontuação de", pessoa, "\n O computador fez", computador);
} else if (computador > pessoa) {
    console.log("Que pena... O computador ganhou com", computador, "Você fez", pessoa, "pontos");
}else {
    console.log("EMPATOU COM", pessoa);
}
