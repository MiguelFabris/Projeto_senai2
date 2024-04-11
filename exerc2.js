// //atividade 3)

function mensagem(){
    console.log("Ola, mundo!");
}
mensagem();

//exercício corrigido e funcionando!

// //atividade 4) 

let nome = "Miguel";
function texto(nomep){
    console.log(`Olá, ${nomep}`);
 }

texto(nome);

//exercício corrigido e funcionando!

//atividade 5)


let num = parseInt(prompt("Digite um número:"));
function dobro(nump){
    return (nump*2);    
}
let vezes = dobro(num);
alert(`${vezes}`);

//exercício corrigido e funcionando!

// atividade 6)
let num1 = parseFloat(prompt("Digite seu primeiro número:"));
let num2 = parseFloat(prompt("Digite seu segundo número:"));
let num3 = parseFloat(prompt("Digite seu terceiro número:"));
function calcularMedias(nump1, nump2, nump3){
    return (nump1+nump2+nump3)/3;
}
let media = calcularMedias(num1, num2, num3);
alert(`${media.toFixed(2)}`);

//exercício corrigido e funcionando!

//atividade 7)

let num01 = parseFloat(prompt("Digite seu primeiro número:"));
let num02 = parseFloat(prompt("Digite seu segundo número:"));
function maiomeno(i, p){
    if(i>p){
        return i
    }else{
        return p
    }
}
let maior = maiomeno(num01, num02);
alert(`${maior}`);

//exercício corrigido e funcionando!

// atividade 8)

    let numero = parseInt(prompt("Digite um número:"));
    function raiz (numeroz){
    return (numeroz*numeroz);
    
}
let resultado = raiz(numero);
alert(`${resultado}`);

//exercício corrigido e funcionando!
