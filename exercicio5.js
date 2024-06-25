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
var OperacaoMatematica = /** @class */ (function () {
    function OperacaoMatematica() {
    }
    OperacaoMatematica.prototype.getOperando1 = function () {
        return this.operando1;
    };
    OperacaoMatematica.prototype.setOperando1 = function (valor) {
        this.operando1 = valor;
    };
    OperacaoMatematica.prototype.getOperando2 = function () {
        return this.operando2;
    };
    OperacaoMatematica.prototype.setOperando2 = function (valor) {
        this.operando2 = valor;
    };
    OperacaoMatematica.prototype.calcular = function () {
        return 0;
    };
    OperacaoMatematica.prototype.mostrarResultado = function () {
        console.log(this.calcular());
    };
    return OperacaoMatematica;
}());
// adição
var Adicao = /** @class */ (function (_super) {
    __extends(Adicao, _super);
    function Adicao() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adicao.prototype.calcular = function () {
        return this.getOperando1() + this.getOperando2();
    };
    return Adicao;
}(OperacaoMatematica));
var adicao = new Adicao();
adicao.setOperando1(4);
adicao.setOperando2(5);
adicao.mostrarResultado();
