let lista = [];
let teclaPressionada = document.getElementById("entrada-itens");

teclaPressionada.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    pegarValorInput();
  }
});

function pegarValorInput() {
  var regex = /^[A-zÀ-ú ]+$/;
  var valorEntrada = document.getElementById("entrada-itens").value;
  valorEntrada = valorEntrada.trim();

  if (valorEntrada === undefined) {
    alert("Nenhum item informado");
    return limparEntrada();
  } else if (!valorEntrada.match(regex)) {
    alert("Caracteres inválidos");
    return limparEntrada();
  }

  valorEntrada.toLowerCase();

  adicionarItens(valorEntrada);
}

function adicionarItens(valorEntrada) {
  lista.push(valorEntrada);

  mostrarListaTela();
}

function mostrarListaTela() {
  var mensagem = document.getElementById("msg-lista");
  var telaLista = document.getElementById("lista");
  var itens = document.createElement("li");
  var blocoItem = document.createElement("label");
  var blocoIcone = document.createElement("span");
  var iconeExcluir = document.createElement("i");

  if (mensagem.textContent !== "") {
    mensagem.textContent = "";
  }

  itens.classList.add("itens");
  telaLista.appendChild(itens);

  blocoItem.textContent = lista.slice(-1);
  itens.appendChild(blocoItem);

  itens.appendChild(blocoIcone);

  iconeExcluir.classList.add("bx", "bx-trash");
  blocoIcone.appendChild(iconeExcluir);

  blocoIcone.setAttribute("onclick", "excluirItem()");

  limparEntrada();
}

function limparEntrada() {
  var valorEntrada = document.getElementById("entrada-itens");
  valorEntrada.value = "";
}

function excluirItem() {}
