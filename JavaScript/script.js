let lista = [];

function pegarValorInput() {
  var regex = /^[A-zÀ-ú ]+$/;
  var valorEntrada = document.getElementById("entrada-itens").value;
  valorEntrada = valorEntrada.trim();

  console.log(valorEntrada.textContent);

  if (!valorEntrada.match(regex)) {
    alert("Caracteres inválidos");
    return limparEntrada();
  }
  valorEntrada.toLowerCase();

  adicionarItens(valorEntrada);
}

function adicionarItens(valorEntrada) {
  lista.push(valorEntrada);
  console.log(lista);

  mostrarListaTela();
}

function mostrarListaTela() {
  var telaLista = document.getElementById("lista");
  var itensLista = document.createElement("div");
  var linhaEntre = document.createElement("div");

  itensLista.classList.add("itens-lista");
  itensLista.textContent = lista.slice(-1);
  telaLista.appendChild(itensLista);

  linhaEntre.classList.add("linha-entre-itens");
  telaLista.appendChild(linhaEntre);

  limparEntrada();
}

function limparEntrada() {
  var valorEntrada = document.getElementById("entrada-itens");
  valorEntrada.value = "";
}
