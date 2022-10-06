//VAI ADICIONAR CONTEUDO NA DIV JOGO DE ACORDO COM O JOGO ESCOLHIDO
function ChamarJogo(minimoNumeroEscolhido, maximoNumeroEscolhido, maiorNumeroJogo, idJogo) {
    LimparResultado();
    divjogo = document.getElementById('jogo')

    let opcaoNumerosPorJogo;
    let opcaoTotalJogos;
    let linkImgJogo;
    possuiMes = false

    for (let i = minimoNumeroEscolhido; i <= maximoNumeroEscolhido; i++) {

        opcaoNumerosPorJogo = opcaoNumerosPorJogo + `<option value=${i}>${i}</option>`
    }

    for (let j = 1; j <= 100; j++) {
        opcaoTotalJogos = opcaoTotalJogos + `<option value=${j}>${j}</option>`
    }

    if (idJogo == 1) {
        linkImgJogo = "img/botao-mega-sena.png"
    } else if (idJogo == 2) {
        linkImgJogo = "img/botao-lotofacil.png"
    } else if (idJogo == 3) {
        linkImgJogo = "img/botao-quina.png"
    } else if (idJogo == 4) {
        linkImgJogo = "img/botao-diadesorte.png"
        possuiMes = true
    } else if (idJogo == 5) {
        linkImgJogo = "img/botao-lotomania.png"
    } else if (idJogo == 6) {
        linkImgJogo = "img/botao-supersete.png"
    } else if (idJogo == 7) {
        linkImgJogo = "img/botao-duplasena.png"
    }


    codigo = `<img class='logoimg' src='${linkImgJogo}'>
    <br>
    <label>Quantos números por jogo? </label>
    <select id='qntNum'>${opcaoNumerosPorJogo}</select>
    <label>Quantos jogos você quer gerar? </label>
    <select id='qntJogos'>${opcaoTotalJogos}</select>
    <br><br>
    <button class="button-73" onclick='Sorteio(${maiorNumeroJogo},${possuiMes})'>Sortear!</button>`

    divjogo.innerHTML = codigo
}

//PEGA A QUANTIDADE DE NUMEROS A SEREM SORTEADOS E A QUANTIDADE DE JOGOS
function Sorteio(maiorNumeroJogo, possuiMes) {
    quantidadeNumeroPorJogo = document.getElementById('qntNum').value;
    totalJogos = document.getElementById('qntJogos').value;
    resultado = document.getElementById('resultado')
    let todosJogos = []
    let jogo;

    for (i=0; i < totalJogos; i++) {
        jogo = SortearJogo(quantidadeNumeroPorJogo,maiorNumeroJogo)

        if (possuiMes == true ) {
            mes = SortearMes()
            jogo += ` - ${mes}`
        }
        
        todosJogos.push(jogo)
    }

    resultado.innerHTML = todosJogos.join("<br>")

    AparecerResultado()

}

function SortearJogo(quantidadeNumeroPorJogo, maiorNumeroJogo) {
    let jogo = []

    while (quantidadeNumeroPorJogo > jogo.length) {
        numeroSorteado = ("00" + Math.floor(Math.random() * maiorNumeroJogo + 1)).slice(-2)

        if (jogo.indexOf(numeroSorteado) == -1) {
            jogo.push(numeroSorteado)
        }
    }

    return jogo.sort((A, B) => A - B).join(" - ") //VAI ORDERNAR OS NUMEROS DOS JOGOS
}


function SortearMes() {
    mesSorteado = Math.floor(Math.random() * (12) + 1)

    switch (mesSorteado) {

        case 1:
            return 'Janeiro'
        case 2:
            return 'Fevereiro'
        case 3:
            return 'Marco'
        case 4:
            return 'Abril'
        case 5:
            return 'Maio'
        case 6:
            return 'Junho'
        case 7:
            return 'Julho'
        case 8:
            return 'Agosto'
        case 9:
            return 'Setembro'
        case 10:
            return 'Outubro'
        case 11:
            return 'Novembro'
        case 12:
            return 'Dezembro'
    }
}

function AparecerResultado() {
    let result = document.getElementById('resultado');
    result.classList.remove('resultado1');
    result.classList.add('resultado');
}

function LimparResultado() {
    let result = document.getElementById('resultado');
    result.classList.remove('resultado')
    result.classList.add('resultado1')
}
