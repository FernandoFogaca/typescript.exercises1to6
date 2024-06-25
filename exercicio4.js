var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Animal.prototype.emitirSom = function () {
        return "uuuuuuu";
    };
    return Animal;
}());
var Cachorro = /** @class */ (function (_super) {
    __extends(Cachorro, _super);
    function Cachorro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cachorro.prototype.emitirSom = function () {
        return "auau";
    };
    return Cachorro;
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.emitirSom = function () {
        return "miau";
    };
    return Gato;
}(Animal));
var animal = new Animal("Papagaio", 3);
console.log(animal);
console.log(animal.emitirSom());
var cachorro = new Cachorro("Pitoco", 4);
console.log(cachorro);
console.log(cachorro.emitirSom());
var gato = new Gato("Cachorro", 19);
console.log(gato);
console.log(gato.emitirSom());
