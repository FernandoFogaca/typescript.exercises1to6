
class OperacaoMatematica {

  private operando1: number;

  private operando2: number;

  getOperando1(): number {
    return this.operando1;
  }

  setOperando1(valor: number): void {
    this.operando1 = valor;
  }

  getOperando2(): number {
    return this.operando2;
  }

  setOperando2(valor: number): void {
    this.operando2 = valor;
  }

  calcular(): number {
    return 0;
  }

  mostrarResultado(): void {
    console.log(this.calcular());
  }
}

// adição
class Adicao extends OperacaoMatematica {

  calcular(): number {
    return this.getOperando1() + this.getOperando2();
  }

}

const adicao = new Adicao();

adicao.setOperando1(4);
adicao.setOperando2(5);

adicao.mostrarResultado();

// subtração
class Subtracao extends OperacaoMatematica {

  calcular(): number {
    return this.getOperando1() - this.getOperando2();
  }

}

// multiplicação
class Multiplicacao extends OperacaoMatematica {

  calcular(): number {
    return this.getOperando1() * this.getOperando2();
  }

}

// divisão
class Divisao extends OperacaoMatematica {
  
  calcular(): number {
    return this.getOperando1() / this.getOperando2();
  }
  
}
