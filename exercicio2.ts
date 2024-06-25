
// string

function digaOla(nome: string): string {
  return "Olá, " + nome;
}

console.log(digaOla("Fred"));

// number

function soma(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(soma(5, 6));

// boolean

function maiorQue(n1: number, n2: number): boolean {
  return n1 > n2;
}

console.log(maiorQue(2, 4));

// null


// undefined


// array

// operador rest/spread
function agrupaNomes(...nomes: string[]): string[] {
  return nomes;
}

console.log(agrupaNomes("Fred", "Fernando", "Carlos"));

// any

function qualquerCoisa(qualquer: any): any {
  return qualquer;
}

console.log(qualquerCoisa(3));

// object

function montaObjeto(propriedade: string, valor: any): object {
  return { [propriedade]: valor }
}

console.log(montaObjeto("numero", 3));

// enum

enum Cores {
  VERMELHA = 1,
  PRETO = 2,
  AMARELO = 3,
  BRANCO = 4,
}

function codigoCor(cor: string): number {
  return Cores[cor];
}

console.log(codigoCor("BRANCO"));