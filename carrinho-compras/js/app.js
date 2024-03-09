let total = 0;
let totalCarrinho = document.getElementById('valor-total');
totalCarrinho.textContent = `R$ 0`
function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.substring(0, produto.indexOf('R$') - 3);
    let valorProduto = produto.substring(produto.indexOf('R$') + 2);
    let quantidade = document.getElementById('quantidade').value;
    let subTotal = quantidade * valorProduto;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = `${carrinho.innerHTML}<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
  </section>`;
    let totalCarrinho = document.getElementById('valor-total');
    total = total + subTotal;
    totalCarrinho.textContent = `R$ ${total}`;
    document.getElementById('quantidade').value = '';
}

function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ 0`;
    total = 0;
}