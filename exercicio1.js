// string
var texto = "Este é um texto";
console.log(typeof texto);
// number
var numero = 52;
console.log(typeof numero);
// boolean
var booleano = true;
console.log(typeof booleano);
// null
var nulo = null;
console.log(typeof nulo);
// undefined
var indefinido = undefined;
console.log(typeof indefinido);
// array
var nomes = ["Fred", "Fernando", "Fabiana"];
console.log(typeof nomes);
// any
var qualquer = false;
console.log(typeof qualquer);
var obj = {
    nome: "Fulano",
    idade: 12,
    email: "fulano@mail.com"
};
console.log(typeof obj);
// enum
var Cores;
(function (Cores) {
    Cores[Cores["VERMELHA"] = 1] = "VERMELHA";
    Cores[Cores["PRETO"] = 2] = "PRETO";
    Cores[Cores["AMARELO"] = 3] = "AMARELO";
    Cores[Cores["BRANCO"] = 4] = "BRANCO";
})(Cores || (Cores = {}));
var cor = 3;
console.log(typeof cor);
