
class Pessoa {

  public nome: string;

  public idade: number;

  private email: string | undefined;

  constructor(nome: string, idade: number, email?: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }

  getDescricao(): string {
    return "Exemplo de descrição";
  }
}

const pessoaComEmail = new Pessoa("Fred", 23, "fred@mail.com");

console.log(pessoaComEmail);

const pessoaSemEmail = new Pessoa("Carlos", 24);

console.log(pessoaSemEmail);
