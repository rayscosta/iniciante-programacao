let ingressoPista = 100;
let ingressoSuperior = 200;
let cadeiraInferior = 400;


function comprar() {
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidadeDeIngressos = document.getElementById('qtd').value;
    if (quantidadeDeIngressos === '' || quantidadeDeIngressos <= 0) {
        alert('A quantidade de ingressos deve ser maior que 0');
        document.getElementById('qtd').value = '';
    } else {
        if (ingresso == 'inferior') {
            cadeiraInferior = comprarIngressos(quantidadeDeIngressos, cadeiraInferior, 'qtd-inferior');
        } else if (ingresso == 'superior') {
            ingressoSuperior = comprarIngressos(quantidadeDeIngressos, ingressoSuperior, 'qtd-superior');
        } else if (ingresso == 'pista') {
            ingressoPista = comprarIngressos(quantidadeDeIngressos, ingressoPista, 'qtd-pista');
        }
    }
}
function comprarIngressos(qtdIngressos, ingressosDisponiveis, idIngressosDisponiveis) {
    if (qtdIngressos > ingressosDisponiveis) {
        ingressosInsuficiente();
        return ingressosDisponiveis;
    } else {
        ingressosDisponiveis -= qtdIngressos;
        document.getElementById(idIngressosDisponiveis).textContent = ingressosDisponiveis;
        document.getElementById('qtd').value = '';
        return ingressosDisponiveis;
    }
}

function ingressosInsuficiente() {
    alert('Quantidade de ingressos disponíveis é insuficiente');
    document.getElementById('qtd').value = '';
}