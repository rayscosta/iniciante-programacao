function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    const idAleatorio = Math.floor(Math.random()*1000);
    if (amigo.value === '') {
        alert('Por favor, digie um nome válido');
        return;
    } else {
        if (listaAmigos.textContent === '') {
            listaAmigos.innerHTML += `<a onclick="remover(event)" href="#" id="${amigo.value}${idAleatorio}" >${amigo.value}</a>`;
        } else {
            listaAmigos.innerHTML += `<a onclick="remover(event)" href="#" id="${amigo.value}${idAleatorio}">, ${amigo.value}</a>`; 
        }
    }
    amigo.value = '';
}

function sortear() {
    let arrayAleatorio = gerarArrayAleatório();
    let listaSorteio = document.getElementById('lista-sorteio');
    for (let index = 0; index < arrayAleatorio.length; index++) {
        if (index == arrayAleatorio.length - 1) {
            listaSorteio.innerHTML += `${arrayAleatorio[index]} --> ${arrayAleatorio[0]}<br>`;
        } else {
            listaSorteio.innerHTML += `${arrayAleatorio[index]} --> ${arrayAleatorio[index + 1]}<br>`;
        }
    }
}

function reiniciar() {
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').textContent = '';
}

function elementoAleatorio(array) {
  const indiceAleatorio = Math.floor(Math.random() * array.length);
  return array[indiceAleatorio];
}

function gerarArrayAleatório() {
    let listaAmigos = document.getElementById('lista-amigos');
    let arrayListaAmigos = listaAmigos.textContent.split(',');
    if (arrayListaAmigos.length < 4) {
        alert('Núemro mínimo de participantes deve ser 4');
        return;
    }
    let arrayAleatorio = [];
    while (arrayAleatorio.length < arrayListaAmigos.length) {
        let elemento = elementoAleatorio(arrayListaAmigos);
        if (!arrayAleatorio.includes(elemento)) {
            arrayAleatorio.push(elemento);
        }
    }
    for (let index = 0; index < arrayListaAmigos.length; index++) {
    }
    return arrayAleatorio;
}

function remover(event) {
    var elementoClicado = event.target;
    alert("Elemento clicado: " + elementoClicado.id);
    document.getElementById(elementoClicado.id).textContent = '';
}