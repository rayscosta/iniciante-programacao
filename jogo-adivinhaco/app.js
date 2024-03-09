'use strict'
let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatoriio();
let tentativas = 1;
exibirMensagemIncial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas'
        exibirTextoNaTela('h1', 'Acertou 😀');
        exibirTextoNaTela('p', `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}` );
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        exibirTextoNaTela('h1', 'Errou 🤭');
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
        } else {
            exibirTextoNaTela('p', `O número secreto é maior que ${chute}`);
        }
        tentativas++;
        limparCampo('input');
    }
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatoriio();
    limparCampo('input');
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limparCampo(tag) {
    document.querySelector(tag).value = '';
}

function gerarNumeroAleatoriio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatoriio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function exibirMensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}