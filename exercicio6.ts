
interface Estoque<Item> {
  item: Item[];
}

// const obj: Estoque<number> = {
//   item: ["sad", "gdfgdf", 0]
// }

interface Produto {
  nome: string;
  preco: number;
}

const estoque: Estoque<Produto> = {
  item: [
    { nome: "Caneta", preco: 1 },
    { nome: "Computador", preco: 1000 },
    { nome: "TV", preco: 2000 },
  ]
}

console.log(estoque);

function adicionarItem(produto: Produto): void {
  
}
