
interface IAnimal {
  nome: string;
  idade: number;
  emitirSom(): string;
}

class Animal implements IAnimal {

  nome: string;

  idade: number;

  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  emitirSom(): string {
    return "uuuuuuu";
  }
}

class Cachorro extends Animal {

  emitirSom(): string {
    return "auau";
  }
}

class Gato extends Animal {

  emitirSom(): string {
    return "miau";
  }
}

const animal = new Animal("Papagaio", 3);
console.log(animal);
console.log(animal.emitirSom());

const cachorro = new Cachorro("Pitoco", 4);
console.log(cachorro);
console.log(cachorro.emitirSom());

const gato = new Gato("Cachorro", 19);
console.log(gato);
console.log(gato.emitirSom());
