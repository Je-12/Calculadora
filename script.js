var pvalor = parseInt(prompt("Digite seu primeiro valor: "))
var svalor = parseInt(prompt("Digite o segundo valor: "))

var operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração ")

if (operacao == 1){
    var resultado = pvalor / svalor
    document.write("<h2>" + pvalor + " / " + svalor + " = " + resultado + "</h2>")
} else if (operacao == 2){
    var resultado = pvalor * svalor
    document.write("<h2>" + pvalor + " X " + svalor + " = " + resultado + "</h2>")
} else if (operacao == 3){
    var resultado = pvalor + svalor
    document.write("<h2>" + pvalor + " + " + svalor + " = " + resultado + "</h2>")
} else if (operacao == 4){
    var resultado = pvalor - svalor
    document.write("<h2>" + pvalor + " - " + svalor + " = " + resultado + "</h2>")
} else{
    document.write("<h2>Numero de operação invalida!<h2>")
}

