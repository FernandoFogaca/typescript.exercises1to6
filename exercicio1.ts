// string

const texto: string = "Este é um texto";
console.log(typeof texto);

// number

const numero: number = 52;
console.log(typeof numero);

// boolean

const booleano: boolean = true;
console.log(typeof booleano);

// null

const nulo: null = null;
console.log(typeof nulo);

// undefined

const indefinido: undefined = undefined;
console.log(typeof indefinido);

// array

const nomes: string[] = ["Fred", "Fernando", "Fabiana"];
console.log(typeof nomes);

// any

const qualquer: any = false;
console.log(typeof qualquer);

// object

interface Pessoa {
  nome: string;
  idade: number;
  email: string;
}

const obj: object = {
  nome: "Fulano",
  idade: 12,
  email: "fulano@mail.com"
}
console.log(typeof obj);

// enum

enum Cores {
  VERMELHA = 1,
  PRETO = 2,
  AMARELO = 3,
  BRANCO = 4,
}

const cor: Cores = 3;
console.log(typeof cor);
