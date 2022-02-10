function SorteioMegasena(){
    qntNum = document.getElementById('qntNum').value;
    qntJogos = document.getElementById('qntJogos').value;
    resultado = document.getElementById('resultado')

    numeroSorteado = Math.floor(Math.random()*(60+1)+1)

    jogosSorteados = []

    // CHECAR A QUANTIDADE DE JOGOS
    for (let index = 1; index <= qntJogos; index++) {

        numerosSorteados = []
        
        //CHECAR A QUANTIDADE DE NUMERO SORTEADO
        for (let i = 1; i <= qntNum; i++) {              

            while (numerosSorteados.length < qntNum){
                var numero = numeroSorteado = Math.floor(Math.random()*(60+1)+1)
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
        }
        jogosSorteados.push(jogo)       
    }

    codigo = ''

    for (let index = 0; index < jogosSorteados.length; index++) {
        
        codigo = codigo + jogosSorteados[index] + '<br>'
    }
    
    resultado.innerHTML = codigo
    
}

function ChecarNumero(a,b){
    return (a - b)
}