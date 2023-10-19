function calcularRank (numeroVitorias, numeroDerrotas){
  let rank = numeroVitorias - numeroDerrotas
  return rank
}

let saldoVitorias = calcularRank(501, 50)

if (saldoVitorias <= 10){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Ferro")
}
else if (saldoVitorias > 10 && saldoVitorias <= 20){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Bronze")
}
else if (saldoVitorias > 20 && saldoVitorias <= 50){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Prata")
}
else if (saldoVitorias > 50 && saldoVitorias <= 80){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Ouro")
}
else if (saldoVitorias > 80 && saldoVitorias <= 90){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Diamante")
}
else if (saldoVitorias > 90 && saldoVitorias <= 100){
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Lendário")
}
else{
  console.log("O Herói tem o saldo de " + saldoVitorias + " e está no nível de " + "Imortal")
}