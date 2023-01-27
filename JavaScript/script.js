/*
 Detectando se a tecla 'Enter' foi pressionada, 
para ter a mesma funcionalidade do botão 'Adicionar
*/
let teclaPressionada = document.getElementById("entrada-itens");
teclaPressionada.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") {
    pegarValorInput();
  }
});

// Classe onde é realizado a criação dos objetos, utilizando um método construtor.
class Item {
  constructor(nome) {
    this.nome = nome;
  }
}

// Lista onde será armazenado objetos contendo cada item
let lista = [];

//Função que pega o valor digitado no campo input.
function pegarValorInput() {
  // variável onde armazena os valores aceitos.
  // Letras maiúsculas e minúsculas, letras com acentos e espaços entre palavras.
  var regex = /^[A-zÀ-ú ]+$/;
  var novoItem = document.getElementById("entrada-itens").value;
  // Removendo possíveis espaços em branco no começo e no fim do texto.
  novoItem = novoItem.trim();

  if (novoItem === undefined) {
    alert("Nenhum item informado");
    return limparEntrada();
    // Verificando se o input é vazio.
  } else if (!novoItem.match(regex)) {
    alert("Caracteres inválidos");
    return limparEntrada();
    // Verificando se o input contém os caracteres permitidos.
  }
  // Passando o texto para letras minúsculas.
  novoItem.toLowerCase();

  criarObjeto(novoItem);
}

function criarObjeto(novoItem) {
  let novoObjeto = new Item(novoItem);

  adicionarItens(novoObjeto);
}

function adicionarItens(novoObjeto) {
  lista.push(novoObjeto);

  mostrarItensLista();
}

function mostrarItensLista() {
  var msg = document.getElementById("msg-lista");
  var unorderedList = document.getElementById("lista");
  // Criando elementos HTML
  var listItem = document.createElement("li");
  var label = document.createElement("label");
  var span = document.createElement("span");
  var icon = document.createElement("i");

  //removendo mensagem de texto
  if (msg.textContent !== "") {
    msg.textContent = "";
  }

  //definindo a classe e o id da 'li'.
  listItem.classList.add("itens");
  listItem.setAttribute("id", `${lista.length - 1}`);
  label.textContent = lista[lista.length - 1].nome;

  /*
  Atribuindo elementos conforme exemplo:
  <ul>
    <li>
      <label> 
        Item aqui 
      </label>
      <span>
        <i> 
          Icone aqui
        </i>
      </span>
    </li>
    .
    .
    .
  </ul>
  */

  unorderedList.appendChild(listItem);
  listItem.appendChild(label);
  listItem.appendChild(span);
  span.appendChild(icon);

  // Definindo classe e elemento 'onclick'
  span.setAttribute("onclick", `excluirItem(${lista.length - 1})`);
  icon.classList.add("bx", "bx-trash");

  limparEntrada();
}

function limparEntrada() {
  var valorEntrada = document.getElementById("entrada-itens");
  valorEntrada.value = "";
}

function excluirItem(idItem) {
  var msg = document.getElementById("msg-lista");
  var telaLista = document.getElementById("lista");
  // Removendo item da tela
  telaLista.removeChild(document.getElementById(`${idItem}`));
  // Removendo item da lista[]
  lista.splice(idItem, 1);

  // Caso a tela fique vazia, a mensagem inicial voltará a ser exibida
  if (lista.length === 0) {
    msg.textContent =
      "Digite um item e adicione à lista clicando no botão ou pressione atecla 'Enter'.";
  }
}
