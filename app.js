let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, "Brazilian Portuguese Female", {rate:1.2});
}

function mensagemNaTela () {
    exibirTextoNaTela ("h1", "ACERTE O NÚMERO SECRETO!");
    exibirTextoNaTela ("p", `Escolha um número de 1 a ${numeroLimite}.`);
}
mensagemNaTela ();

function verificarChute() {
    console.log ("Apertou o botão CHUTAR.");
    console.log (`O número secreto é ${numeroSecreto}`);
    let chute = document.querySelector ("input").value;
    console.log (chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativas = tentativas > 1 ? "tentativas!" : "tentativa!";
        let mensagemTentativas = (`Você acertou o Número Secreto com ${tentativas} ${palavraTentativas}`);

        exibirTextoNaTela ("h1", "PARABÉNS!!!");
        exibirTextoNaTela ("p", mensagemTentativas);
        
        document.getElementById ("reiniciar").removeAttribute ("disabled");
        console.log ("Botão NOVO JOGO liberado.");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ("h1", "Continue tentando!");
            exibirTextoNaTela ("p", `O Número Secreto é menor que ${chute}.`);
        } else {
            exibirTextoNaTela ("h1", "Continue tentando!");
            exibirTextoNaTela ("p", `O Número Secreto é maior que ${chute}.`);
            } 
            tentativas++;
            //tentativas = tentativas + 1;
            limparChute ();
        } 
    } 

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio (); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparChute () {
    chute = document.querySelector ("input");
    chute.value = "";
}

function reiniciarJogo () {
    numeroSecreto = gerarNumeroAleatorio();
    limparChute ();
    tentativas = 1;
    mensagemNaTela ();
    document.getElementById ("reiniciar").setAttribute ("disabled", true);
}