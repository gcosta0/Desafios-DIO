let result = " "
function ranking(win, lose){
    let rank = " "
    result = win - lose
    if (result <= 10){
        rank = "Ferro"
    } 
    else if (result > 10 && result <= 20){
        rank = "Bronze"
    } 
    else if (result > 20 && result <= 50){
        rank = "Prata"
    } 
    else if(result > 50 && result <= 80){
        rank = "Ouro"
    } 
    else if(result > 80 && result <= 90){
        rank = "Diamante"
    }
     else if(result > 90 && result <= 100){
        rank = "Lendario"
        } 
    else if(result > 100){
        rank = "Imortal"
        }
    return rank
    }
    
let classificacao = ranking()
console.log(`O heroi tem um saldo de ${result} vitorias e esta no rank ${classificacao}`)