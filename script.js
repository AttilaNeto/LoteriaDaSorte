


function ChamarMegaSena(){
    divjogo = document.getElementById('jogo')
    
    codigo = "<img class='logoimg' src='/img/botao-mega-sena.png'><br><label>Quantidade de Numeros Sorteados: </label><select id='qntNum'><option selected value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option><option value=13>13</option><option value=14>14</option><option value=15>15</option></select><label>Total de Jogos Sorteados: </label><input id='qntJogos' type='number' value=1><br><br><button onclick='Sorteio(60)'>Sortear!</button>"

    divjogo.innerHTML = codigo
}

function ChamarLotofacil(){
    divjogo = document.getElementById('jogo')

    codigo = "<img class='logoimg' src='/img/botao-lotofacil.png'><br><label>Quantidade de Numeros Sorteados: </label><select id='qntNum'><option value=15>15</option><option value=16>16</option><option value=17>17</option><option value=18>18</option><option value=19>19</option><option value=20>20</option></select><label>Quantidade de Jogos: </label><input id='qntJogos' type='number' value=1><br><br><button onclick='Sorteio(25)'>Sortear!</button>"

    divjogo.innerHTML = codigo
}

function ChamarQuina(){

    divjogo = document.getElementById('jogo')

    codigo = "<img class='logoimg' src='/img/botao-quina.png'><br><label>Quantidade de Numeros Sorteados: </label><select id='qntNum'><option selected value=5>5</option><option value=6>6</option><option value=7>7</option><option value=8>8</option><option value=9>9</option><option value=10>10</option><option value=11>11</option><option value=12>12</option><option value=13>13</option><option value=14>14</option><option value=15>15</option></select><label>Total de Jogos Sorteados: </label><input id='qntJogos' type='number' value=1><br><br><button onclick='Sorteio(80)'>Sortear!</button>"

    divjogo.innerHTML = codigo
}




function Sorteio(totalSorteio){
    qntNum = document.getElementById('qntNum').value;
    qntJogos = document.getElementById('qntJogos').value;
           
    SortearNumeros(qntJogos, qntNum, totalSorteio)
}

function ChecarNumero(a,b){
    return (a - b)
}

function SortearNumeros(qntJogos, qntNum, numSort){

    resultado = document.getElementById('resultado')

    jogosSorteados = []

    // CHECAR A QUANTIDADE DE JOGOS
    for (let index = 1; index <= qntJogos; index++) {

        numerosSorteados = []
        
        //CHECAR A QUANTIDADE DE NUMERO SORTEADO
        for (let i = 1; i <= qntNum; i++) {              

            while (numerosSorteados.length < qntNum){
                var numero = numeroSorteado = Math.floor(Math.random()*(numSort+1)+1)
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