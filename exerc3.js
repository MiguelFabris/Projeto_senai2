    //ATIVIDADE 2)

// let altura = parseFloat(prompt("Digite sua altura em metros:"));
// let peso = parseFloat(prompt("Digite seu peso em quilogramas:"));
// function IMC (alt, pes){
//     return (pes/(alt*alt));
// }
// let resultado = IMC (altura, peso);
// alert(`O resultado do seu IMC é de ${resultado.toFixed(2)}.`);

    //ATIVIDADE 3)

// let result = 1;
// let num = parseInt(prompt("Digite o número que deseja saber o fatorial:"));
// function fatorial(n){
//  if (n==1 || n==0){
//     return 1;
//  }else{
//     while(n!=0){
//         result*=n;
//         n--;
//     }
//     return result;
//  }
// }
// let resultado = fatorial(num);
// alert(`O fatorial de ${num} é ${resultado}.`);

    //ATIVIDADE 4)

// let dinheiro = parseFloat(prompt("Digite o valor em dólares que deseja ser convertido:"));
// function conversao(valor){
//     return (valor*4.80)
// }
// let reais = conversao(dinheiro);
// alert(`O valor de US$${dinheiro} em reais é de R$${reais}.`);

    //ATIVIDADE 5)

// let altura = parseFloat(prompt("Digite o valor da altura da sua parede em metros:"));
// let largura = parseFloat(prompt("Digite o valor da largura da sua parede em metros:"));
// function area(alt, larg){
//     return alt*larg;
// }
// function perimetro(larg){
//     return (larg*2)+(alt*2);
// }
// let resultadoArea = area(altura, largura);
// let resultadoPerimetro = perimetro(largura);
// alert(`O resultado da área é de ${resultadoArea} metros\nO resultado do perímetro é de ${resultadoPerimetro} metros.`);

    //ATIVIDADE 6)

// let raio = parseFloat(prompt("Digite o valor do raio do seu círculo em metros:"));
// function area(r){
//     return 3.14*(r*r);
// }
// function perimetro(r){
//     return 2*3.14*r
// }
// let resultadoArea = area(raio);
// let resultadoPerimetro = perimetro(raio);
// alert(`O resultado da área da circunferência é de ${resultadoArea.toFixed(2)} metros.\nO resultado do perímetro da circunferência é de ${resultadoPerimetro.toFixed(2)} metros.`);


    //ATIVIDADE 7)

// let num = parseInt(prompt("Digite o valor do número que deseja saber a tabuada:"));
// let contador = 1
// let resultado;
// function tabuada(n){
//     while(contador<=10){
//     resultado = n*contador
//     alert(`${n}x${contador}=${resultado}.`);
//     contador++
//     }
// }
// tabuada(num);