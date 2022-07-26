

//CHAMA A TELA DO JOGO
function Chamar(iniNum, finalNum,totalNum, jogo){
    LimparResultado();

    divjogo = document.getElementById('jogo')

    opcao = ''
    for (let i = iniNum; i <= finalNum; i++) {
        
        opcao = opcao + "<option value="+i+">"+i+"</option>"
    }

    mes = false

    jogo2 = ''
    if (jogo==1) {
        jogo2 = "img/botao-mega-sena.png"
    } else if (jogo==2){
        jogo2 = "img/botao-lotofacil.png"
    } else if (jogo==3){
        jogo2 = "img/botao-quina.png"
    } else if (jogo==4){
        jogo2 = "img/botao-diadesorte.png"
        mes = true
    } else if (jogo==5){
        jogo2 = "img/botao-lotomania.png"
    } else if (jogo==6){
        jogo2 = "img/botao-supersete.png"
    } else if (jogo==7){
        jogo2 = "img/botao-duplasena.png"
    }  
    
    
    codigo = "<img class='logoimg' src='"+jogo2+"'><br><label>Quantidade de Numeros Sorteados: </label><select id='qntNum'>"+opcao+"</select><label>Total de Jogos Sorteados: </label><input id='qntJogos' type='number' value=1><br><br><button onclick='Sorteio("+totalNum+","+mes+")'>Sortear!</button>"

    divjogo.innerHTML = codigo
}

//PEGA A QUANTIDADE DE NUMEROS A SEREM SORTEADOS E A QUANTIDADE DE JOGOS
function Sorteio(totalSorteio,temMes){
    qntNum = document.getElementById('qntNum').value;
    qntJogos = document.getElementById('qntJogos').value;
    
    SortearNumeros(qntJogos, qntNum, totalSorteio,temMes)
    AparecerResultado()
}

function ChecarNumero(a,b){
    return (a - b)
}

function SortearNumeros(qntJogos, qntNum, numSort, temMes){

    resultado = document.getElementById('resultado')

    jogosSorteados = []

    // CHECAR A QUANTIDADE DE JOGOS
    for (let index = 1; index <= qntJogos; index++) {

        numerosSorteados = []
        
        //CHECAR A QUANTIDADE DE NUMERO SORTEADO
        for (let i = 1; i <= qntNum; i++) {              

            while (numerosSorteados.length < qntNum){
                var numero = numeroSorteado = Math.floor(Math.random()*(numSort)+1)
                numero = ("00" + numero).slice(-2)
                if (numerosSorteados.indexOf(numero) == -1){
                    numerosSorteados.push(numero)
                }
            }

            jogo = ""

            for (let j = 0; j < numerosSorteados.sort(ChecarNumero).length; j++) {
                
                
                if (j==numerosSorteados.length-1) {
                    jogo = jogo  + numerosSorteados[j]
                } else {
                    jogo = jogo  + numerosSorteados[j] + ' - '
                }
                 
            }

            if (temMes==true){
                mes = SortearMes()
                jogo = jogo + " - Mês: "+mes
            }
        }
        jogosSorteados.push(jogo)
    }

    codigo = ''

    for (let index = 0; index < jogosSorteados.length; index++) {
        
        codigo = codigo + jogosSorteados[index] + '<br>'
    }
    
    resultado.innerHTML = codigo
}

function SortearMes(){
    var numero = numeroSorteado = Math.floor(Math.random()*(12)+1)

    console.log(numero)

    switch (numero){

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

function AparecerResultado(){
    let result = document.getElementById('resultado');
    result.classList.remove('resultado1');
    result.classList.add('resultado');
}

function LimparResultado(){
    let result = document.getElementById('resultado');
    result.classList.remove('resultado')
    result.classList.add('resultado1')
}
