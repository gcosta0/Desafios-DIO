let nomeDoHeroi = "Super G"
let XpsDoHeroi = 11000
let classificacao = ""

if (XpsDoHeroi <= 1000) {
    classificacao = "Ferro"
} else if (XpsDoHeroi > 1000 && XpsDoHeroi <= 2000) {
    classificacao = "Bronze"
} else if (XpsDoHeroi >= 2001 && XpsDoHeroi <= 6000) {
    classificacao = "Prata"
}
else if (XpsDoHeroi >= 6001 && XpsDoHeroi <= 7000) {
    classificacao = "Ouro"
}
else if (XpsDoHeroi >= 7001 && XpsDoHeroi <= 8000) {
    classificacao = "Platina"
}
else if (XpsDoHeroi >= 8001 && XpsDoHeroi <= 9000) {
    classificacao = "Ascendente"
}
else if (XpsDoHeroi >= 9001 && XpsDoHeroi <= 10000) {
    classificacao = "Imortal"
}
else if (XpsDoHeroi > 10000) {
    classificacao = "Radiante"
}

console.log(`O heroi ${nomeDoHeroi} está classificado como ${classificacao}`)


      