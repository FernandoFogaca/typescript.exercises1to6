var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, email) {
        this.nome = nome;
        this.idade = idade;
        this.email = email;
    }
    Pessoa.prototype.getDescricao = function () {
        return "Exemplo de descrição";
    };
    return Pessoa;
}());
var pessoaComEmail = new Pessoa("Fred", 23, "fred@mail.com");
console.log(pessoaComEmail);
var pessoaSemEmail = new Pessoa("Carlos", 24);
console.log(pessoaSemEmail);
