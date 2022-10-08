//VAI ADICIONAR CONTEUDO NA DIV JOGO DE ACORDO COM O JOGO ESCOLHIDO
function ChamarJogo(
  minimoNumeroEscolhido,
  maximoNumeroEscolhido,
  maiorNumeroJogo,
  idJogo
) {
  LimparResultado();
  divjogo = document.getElementById("jogo");

  let opcaoNumerosPorJogo;
  let opcaoTotalJogos;
  possuiMes = false;

  for (let i = minimoNumeroEscolhido; i <= maximoNumeroEscolhido; i++) {
    opcaoNumerosPorJogo =
      opcaoNumerosPorJogo + `<option value=${i}>${i}</option>`;
  }

  for (let j = 1; j <= 100; j++) {
    opcaoTotalJogos = opcaoTotalJogos + `<option value=${j}>${j}</option>`;
  }

  let linkImgJogo = [
    "img/botao-mega-sena.png",
    "img/botao-lotofacil.png",
    "img/botao-quina.png",
    "img/botao-diadesorte.png",
    "img/botao-lotomania.png",
    "img/botao-supersete.png",
    "img/botao-duplasena.png",
  ];

  if (idJogo == 3) {
    possuiMes = true;
  }

  codigo = `<img class='logoimg' src='${linkImgJogo[idJogo]}'>
    <br>
    <label>Quantos números por jogo? </label>
    <select id='qntNum'>${opcaoNumerosPorJogo}</select>
    <label>Quantos jogos você quer gerar? </label>
    <select id='qntJogos'>${opcaoTotalJogos}</select>
    <br><br>
    <button class="button-73" onclick='Sorteio(${maiorNumeroJogo},${possuiMes})'>Sortear!</button>`;

  divjogo.innerHTML = codigo;
}

//PEGA A QUANTIDADE DE NUMEROS A SEREM SORTEADOS E A QUANTIDADE DE JOGOS
function Sorteio(maiorNumeroJogo, possuiMes) {
  quantidadeNumeroPorJogo = document.getElementById("qntNum").value;
  totalJogos = document.getElementById("qntJogos").value;
  resultado = document.getElementById("resultado");
  let todosJogos = [];
  let jogo;

  for (i = 0; i < totalJogos; i++) {
    jogo = SortearJogo(quantidadeNumeroPorJogo, maiorNumeroJogo);

    if (possuiMes == true) {
      mes = SortearMes();
      jogo += ` - ${mes}`;
    }

    todosJogos.push(jogo);
  }

  resultado.innerHTML = todosJogos.join("<br>");

  AparecerResultado();
}

function SortearJogo(quantidadeNumeroPorJogo, maiorNumeroJogo) {
  let jogo = [];

  while (quantidadeNumeroPorJogo > jogo.length) {
    numeroSorteado = (
      "00" + Math.floor(Math.random() * maiorNumeroJogo + 1)
    ).slice(-2);

    if (jogo.indexOf(numeroSorteado) == -1) {
      jogo.push(numeroSorteado);
    }
  }

  return jogo.sort((A, B) => A - B).join(" - "); //VAI ORDERNAR OS NUMEROS DOS JOGOS
}

function SortearMes() {
  mesSorteado = Math.floor(Math.random() * 11 + 1);

  let meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  return meses[mesSorteado];
}

function AparecerResultado() {
  let result = document.getElementById("resultado");
  result.classList.remove("resultado1");
  result.classList.add("resultado");
}

function LimparResultado() {
  let result = document.getElementById("resultado");
  result.classList.remove("resultado");
  result.classList.add("resultado1");
}
