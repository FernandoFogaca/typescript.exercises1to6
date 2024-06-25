// string
function digaOla(nome) {
    return "Olá, " + nome;
}
console.log(digaOla("Fred"));
// number
function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(5, 6));
// boolean
function maiorQue(n1, n2) {
    return n1 > n2;
}
console.log(maiorQue(2, 4));
// null
// undefined
// array
// operador rest/spread
function agrupaNomes() {
    var nomes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nomes[_i] = arguments[_i];
    }
    return nomes;
}
console.log(agrupaNomes("Fred", "Fernando", "Carlos"));
// any
function qualquerCoisa(qualquer) {
    return qualquer;
}
console.log(qualquerCoisa(3));
// object
function montaObjeto(propriedade, valor) {
    var _a;
    return _a = {}, _a[propriedade] = valor, _a;
}
console.log(montaObjeto("numero", 3));
// enum
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHA"] = 1] = "VERMELHA";
    Cores[Cores["PRETO"] = 2] = "PRETO";
    Cores[Cores["AMARELO"] = 3] = "AMARELO";
    Cores[Cores["BRANCO"] = 4] = "BRANCO";
})(Cores || (Cores = {}));
function codigoCor(cor) {
    return Cores[cor];
}
console.log(codigoCor("BRANCO"));
